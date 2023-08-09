package first.cake.service.file;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.TransferManagerBuilder;
import com.amazonaws.services.s3.transfer.Upload;
import com.amazonaws.util.IOUtils;
import first.cake.domain.dto.chat.FileUploadDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class S3FileService implements FileService {

    private final AmazonS3 amazonS3;

    // S3 bucket 이름
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    // S3 base URL
    @Value("${cloud.aws.s3.url}")
    private String baseUrl;

    // MultipartFile 과 transcation, roomId 를 전달받는다.
    // 이때 transcation 는 파일 이름 중복 방지를 위한 UUID 를 의미한다.
    @Override
    public FileUploadDto uploadFile(MultipartFile file, String transaction, String roomId) {
        try {
            String filename = file.getOriginalFilename(); // 파일원본 이름
            String key = roomId + "/" + transaction + "/" + filename; // S3 파일 경로

            // 매개변수로 넘어온 multipartFile 을 File 객체로 변환 시켜서 저장하기 위한 메서드
            File convertedFile = convertMultipartFileToFile(file, transaction + filename);

            // 아마존 S3 에 파일 업로드를 위해 사용하는 TransferManagerBuilder
            TransferManager transferManager = TransferManagerBuilder
                    .standard()
                    .withS3Client(amazonS3)
                    .build();

            // bucket 에 key 와 converedFile 을 이용해서 파일 업로드
            Upload upload = transferManager.upload(bucket, key, convertedFile);
            upload.waitForUploadResult();

            // 변환된 File 객체 삭제
            removeFile(convertedFile);

            // uploadDTO 객체 빌드
            FileUploadDto uploadReq = FileUploadDto.builder()
                    .transaction(transaction)
                    .chatRoom(roomId)
                    .originFileName(filename)
                    .fileDir(key)
                    .s3DataUrl(baseUrl + key)
                    .build();

            // uploadDTO 객체 리턴
            return uploadReq;

        } catch (AmazonServiceException e) {
            log.error("fileUploadException {}", e.getMessage());
            return null;
        } catch (SdkClientException e) {
            log.error("fileUploadException {}", e.getMessage());
            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteFileDir(String path) {
        List<S3ObjectSummary> list = amazonS3.listObjects(bucket, path).getObjectSummaries();
        for (S3ObjectSummary summary : list) {
            amazonS3.deleteObject(bucket, summary.getKey());
        }
    }

    @Override
    public ResponseEntity<byte[]> getObject(String fileDir, String fileName) throws IOException {
        // bucket 와 fileDir 을 사용해서 S3 에 있는 객체 - object - 를 가져온다.
        S3Object object = amazonS3.getObject(new GetObjectRequest(bucket, fileDir));

        // object 를 S3ObjectInputStream 형태로 변환한다.
        S3ObjectInputStream objectInputStream = object.getObjectContent();

        // 이후 다시 byte 배열 형태로 변환한다.
        // 아마도 파일 다운로드를 위해서는 byte 형태로 변환할 필요가 있어서 그런듯하다
        byte[] bytes = IOUtils.toByteArray(objectInputStream);

        // 여기는 httpHeader 에 파일 다운로드 요청을 하기 위한내용
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);

        // 지정된 fileName 으로 파일이 다운로드 된다.
        httpHeaders.setContentDispositionFormData("attachment", fileName);

        log.info("HttpHeader : [{}]", httpHeaders);

        return new ResponseEntity<>(bytes, httpHeaders, HttpStatus.OK);
    }
}
