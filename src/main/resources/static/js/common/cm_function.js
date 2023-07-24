/*
 * 분류 : 문자함수
 * 요약 : 문자열이 공백인지 체크한다.
 */
function isEmpty(P) {
    if (P != null) {
      P = fnReplaceCharAll(P,"\n","");
      P = fnReplaceCharAll(P,"\r","");
   }
   return ((P == null) || (P.replace(/ /gi,"").length == 0));
}

/*
 * 분류 : 문자함수
 * 요약 : 문자열이 공백인지 체크한다.
 */
function isEmpty2(P) {
	
	if (P != null) {
		P = fnReplaceCharAll(P,"\n","");
	    P = fnReplaceCharAll(P,"\r","");
	    P = fnReplaceCharAll(P," ","");
	    
	    return (P == "");
	}
	return true;  
}

function EmptyReplace(P){

	if (P != null) {
		P = fnReplaceCharAll(P,"\n","");
	}
	
	return P;
}
/**
 * 분류 : 문자함수
 * 요약 : 문자열에서 태그 삭제
 * @param P
 * @returns
 */
function removeHTMLTag(P) {
	return P.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g,"");
}

/*
 * 분류 : 문자함수
 * 요약 : 변수에 문자만 있는지 체크한다.
 */
function isString(P) {
   var len = P.length;

   for (var i = 0; i < len; i++) {
      if ( ((P.charAt(i) >= "a") && (P.charAt(i) <= "z")) || ((P.charAt(i) >= "A") && (P.charAt(i) <= "Z")) ) {
      }
      else {
         return false;
      }
   }
   return true;
}

/*
 * 분류 : 문자함수
 * 요약 : 변수에 숫자만 있는지 체크한다.
 */
function isDigit (P) {
   var len = P.length;

   for (var i = 0; i < len; i++) {
      if ( (P.charAt(i) >= "0") && (P.charAt(i) <= "9") ) {
      }
      else {
         return false;
      }
   }
   return true;
}

/*
 * 분류 : 문자함수
 * 요약 : 객체의 값이 숫자만 있는지 체크한다. 숫자외에 값이 잇을경우 경우창을 뛰우고 해당객체로 포커스를 이동시킨다.
 */
function isDigit2 (obj) {
   if(isNaN(obj.value) && obj.value != 0){
      alert("숫자를 입력하십시오");
      obj.focus();
      return false;
   }
   return true;
}

/*
 * 분류 : 문자함수
 * 요약 : 단순 PASSWORD Check, 6자 미만, 영숫자 미 혼용, ID+글자사용, ID 와 동일 사용, 동일문자열 4회 이상연속
 */
function simplePASSWORDCheck(strpass, id) {
   // 단순 Password Check  2003/4/17 윤미진
   var chkStr = new Array();
   var chkFlag = 0;
   var chkCnt = 0;
   var digitFlag = 0;
   var alphaFlag = 0;

   if(strpass.length < 6)
   {
      // 영 숫자 혼용으로 6자 이상 입력 하십시요.
      return "MIN_LENGTH";
   }

   if(strpass == id || strpass.search(id) != -1)
   {
      return "INCLUDE_ID";
   }


   for(i= 0; i < strpass.length; i++)
   {
      if(chkStr[chkCnt] == strpass.charAt(i)) chkCnt += 1;
      else chkCnt = 0;

      chkStr[chkCnt] = strpass.charAt(i);
      if(chkFlag == 0 && (chkCnt + 1) > 3) chkFlag = 1;

      if ( (strpass.charAt(i) >= "0") && (strpass.charAt(i) <= "9") )
          digitFlag = 1;

      if ( (strpass.charAt(i) >= "a") && (strpass.charAt(i) <= "z") ||
           (strpass.charAt(i) >= "A") && (strpass.charAt(i) <= "Z") )
          alphaFlag = 1;

   }
   // 영 숫자 혼용이 아닌경우
   if(digitFlag == 0 || alphaFlag == 0)
   {
      // 영 숫자 혼용으로 6자 이상 입력 하십시요.
      return "NOT_MIX";
   }

   // 동일 문자 연속 4회 이상인 경우
   if(chkFlag == 1)
   {
     // 동일 문자열이 4회 이상 연속되었습니다.
     return "SAME_STRING";
   }

   return "OK";
}

/*
 * 분류 : 문자함수
 * 요약 : 문자열에서 대상문자를 모두 대체문자로 변경한다. (원본문자열, 대상 문자, 대체 문자)
 */
function fnReplaceCharAll(str, tarCh, repCh) {
	
	var nowCh  = "";
	var sumStr = "";
	
	if (typeof str == "string") {
		var len    = str.length;
		
		for (var i = 0; i < len; i++) {
			if (str.charAt(i) == tarCh)
				nowCh = repCh;
			else
				nowCh = str.charAt(i);

	      sumStr = sumStr + nowCh;
		}
	}
	return sumStr;
}

/*
 * 분류 : 문자함수
 * 요약 : 문자열의 자우공백을 제거한다. 공백만 있는경우에는 작동하지 않는다.
 */
function trim(str) {
    var start = 0;
    var end   = str.length - 1;
    
    for (var i=0; i < str.length; i++) {
         if (str.substring(i,i+1) != " ") {
             start = i;
             break;
         }
    }

    for (var i=str.length - 1; i >= 0; i--) {
         if (str.substring(i,i+1) != " ") {
             end = i + 1;
             break;
         }
    }

    return str.substring(start, end);
}

/*
 * 분류 : 문자함수
 * 요약 : 문자열의 자우공백을 제거한다. (공백만 있는경우도 됨)
 */
function trim2(str) {
	if(isEmpty(str)){
		return "";
	}
    var start = 0;
    var end   = str.length - 1;
    
    for (var i=0; i < str.length; i++) {
         if (str.substring(i,i+1) != " ") {
             start = i;
             break;
         }
    }

    for (var i=str.length - 1; i >= 0; i--) {
         if (str.substring(i,i+1) != " ") {
             end = i + 1;
             break;
         }
    }

    return str.substring(start, end);
}

/*
 * 분류 : 문자함수
 * 요약 : 객체의 문자열의 길이를 바이트 단위로 체크한다. (객체, 최대 바이트 길이값)
 */
function fnCheckStringLength(stringElement,MAX)
{
  	var origin_str = stringElement.value;
  	var return_str ="";
  	var strLen = 0;
  	var return_total = 0;
  	var temp_len=0;
  	    
  	strLen = origin_str.length;
  	    
  	for( i=0 ; i < strLen ; i++ )
  	{
  	   var ch = origin_str.charAt(i);
  
  	   if( escape(ch).length > 4 ) return_total += 2;
  	   else if( ch != '\r' ) return_total++;
  		
  	   if( return_total > MAX )
  	   {
  	      alert(MAX + " 바이트 이하로 입력해 주세요.");
  	      stringElement.value=return_str;
  					  stringElement.focus();
  					  return_total=temp_len;
  	      break;
  	   }
  	   else
  	   {
  				   return_str += ch;
  				   temp_len=return_total;
  	   }
  	}
  	return;
}

/**
 * 분류 : 문자함수
 * 요약 : 텍스트를 * 로 변환  (ex : ("abcdebe" , 2)  = abcde**)
 * @param source
 * @param len
 * @returns {String}
 */
function getStringReverseHidden(source, len) {
	var sReturn = "";
	if(!isEmpty(source)) {
		var strLen = source.length;
		for(var i=0; i<strLen; i++) {
			if( i >= (strLen - len)) {
				sReturn += "*";
			} else {
				sReturn += source.charAt(i);
			}
		}
	}
	return sReturn;
}

/**
 * 분류 : 문자함수
 * 요약 : 문자열을 len 만큼 자르고 "..." 을 붙여 잘린 문자열임을 표시
 * @param source
 * @param len
 * @returns {String}
 */
function getByteString(source, len) {
	var result = "";
	if(!isEmpty(source) && len > 0) {
		try {
			var cTmp = "";
			var bTmp = "";
			var nowLength = 0;
			var strLength = 0;
			
			for(var i=0; i<source.length; i++) {
				cTmp = source.charAt(i);
				strLength = cTmp.length;
				if(strLength == 3) {
					nowLength += 2;
				} else {
					nowLength += strLength;
				}
				
				if(nowLength <= len) {
					result += cTmp;
				} else {
					break;
				}
			}
			
			if(source.length > result.length) {
				result += "...";
			}
			
		} catch(e) {
			result = source;
		}
	}
	return result;
}


/*
 * 분류 : 숫자함수
 * 요약 : 숫자만 리턴한다. 숫자가 존재하지 않을 경우 0을 리턴한다. 콤마 제거시에 사용한다.
 */
function fnOnlyNumber(str){
	var	len		= "";
	var oRtn	= {};
	var iRtn	= 0;
	var sRtn	= "";
	if(str != undefined){
		len		= str.length;
		oRtn	= {};
		iRtn	= 0;
		sRtn	= "";
		
		for (var i = 0; i < len; i++) {
			if ((str.charAt(i) >= "0" && str.charAt(i) <= "9") || (str.charAt(i) == "-") || (str.charAt(i) == ".")) 
				sRtn	+= str.charAt(i);
		}
		if (sRtn != "")
			iRtn		= parseInt(sRtn, 10);
		
		oRtn.number	= iRtn;
		oRtn.string	= sRtn;
	}
	
	return oRtn;
}

/*
 * 분류 : 실수함수
 * 요약 : 실수만 리턴한다. 실수가 존재하지 않을 경우 0을 리턴한다. 콤마 제거시에 사용한다.
 */
function fnOnlyFloat(str){
	var	len		= "";
	var oRtn	= {};
	var iRtn	= 0;
	var sRtn	= "";
	if(str != undefined){
		len		= str.length;
		oRtn	= {};
		iRtn	= 0;
		sRtn	= "";
		
		for (var i = 0; i < len; i++) {
			if ((str.charAt(i) >= "0" && str.charAt(i) <= "9") || (str.charAt(i) == "-") || (str.charAt(i) == ".")) 
				sRtn	+= str.charAt(i);
		}
		if (sRtn != "")
			iRtn		= parseFloat(sRtn, 10);
		
		oRtn.number	= iRtn;
		oRtn.string	= sRtn;
	}
	return oRtn;
}


/*
 * 분류 : 숫자함수
 * 요약 : 객체에 숫자만 입력하도록 한다.
 */
function SetNumObj(obj) {
    obj.value   = SetNum(obj.value);
    obj.select();
    return;
}

/*
 * 분류 : 숫자함수
 * 요약 : 문자열에서 콤마를 제거한다. 
 */
function SetNum(str) {
    return fnReplaceCharAll(str, ",", "");
}

/*
 * 분류 : 숫자함수
 * 요약 : 천단위마다 콤마를 삽입한다.
 */
function SetNumComma(str) {
	
	if (str == undefined) {
		return "";
	}
	
	str = "" + str;
	
	var isMinus = false;
	
	if (str.length > 1) {
		if (str.charAt(0) == '-') {
			isMinus = true;
		}
	}
	
    var tmpStr  = onlyNumber( "" + str );
    //console.log("tmpStr====="+tmpStr);
    var sResult = "";

    if (tmpStr != "")  {
        tmpStr  = "" + parseInt(tmpStr, 10);        // 0부터 시작할 경우 앞에 0 모두 제거

        var len     = tmpStr.length;
        var cnt     = 0;

        for (var i = len - 1; i >= 0; i--) {
            if (cnt > 0 && cnt % 3 == 0 ) {
                sResult  = "," + sResult;
            }
            sResult  = tmpStr.charAt(i) + sResult;
            cnt++;
        }
    }
    
    if (isMinus && sResult != "") {
    	sResult = "-" + sResult;
    }
    
    return sResult;
}

/*
 * 분류 : 숫자함수
 * 요약 : 숫자값만을 리턴한다. 콤마제거시에 사용한다.
 */
function onlyNumber (str) {
    var len      = str.length;
    var sReturn  = "";

    for (var i = 0; i < len; i++) {
        if ( (str.charAt(i) >= "0") && (str.charAt(i) <= "9") ) 
            sReturn += str.charAt(i);
    }
    return sReturn;
}

/*
 * 분류 : 숫자함수
 * 요약 : 숫자만 입력 KeyDown 이벤트 (keyPressCheck와 동시사용해야함, 한글은 적용 안됨)
 */
function keyDownCheck(event, P) {
   var sKeyCode  = event.keyCode;
   var sKeyValue = String.fromCharCode(sKeyCode);
   var sKeyCheck = "";
   var sTmpKey1  = 0;
   var sTmpKey2  = 0;

   if (P == "Y") {
      sKeyCheck = "-0123456789";
      sTmpKey1  = 109;
      sTmpKey2  = 189;
   }
   else {
      sKeyCheck = "0123456789";
      sTmpKey1  = 8;
      sTmpKey2  = 8;
   }
   
   if (sKeyCheck.indexOf(sKeyValue) > -1 || sKeyCode == sTmpKey1 || sKeyCode == sTmpKey2 || sKeyCode == 8 || sKeyCode == 9 || sKeyCode == 110 || sKeyCode == 190 || sKeyCode == 46 || sKeyCode == 16 || sKeyCode == 17 || (sKeyCode >= 96 && sKeyCode <= 105)|| (sKeyCode >= 35 && sKeyCode <= 40) ) {
      event.returnValue = true;
   }
   else {
    event.keyCode = 0;
      event.returnValue = false;
   }
}

/*
 * 분류 : 숫자함수
 * 요약 : 숫자만 입력 KeyPress 이벤트 (keyDownCheck와 동시사용해야함, 한글은 적용 안됨)
 */
function keyPressCheck( event, P) {
   var sKeyCode  = event.keyCode;
   var sKeyValue = String.fromCharCode(sKeyCode);
   var sKeyCheck = "";
   if (P == "Y") {
      sKeyCheck = "-0123456789";
   }
   else {
      sKeyCheck = "0123456789";
   }
   if (sKeyCheck.indexOf(sKeyValue) > -1 || sKeyCode == 46) {
      event.returnValue = true;
   }
   else {
    event.keyCode = 0;
      event.returnValue = false;
   }
}


//파일 다운로드
function CmImageDown(attachId, thumbnailId) {

	if (jQuery("#cm_download").html() == null) {
		
		var arrHtml	= [];
		arrHtml.push("<iframe id='cm_download' name='cm_download src='about:blank' style='display:none;' scrolling='auto' marginwidth='0' marginheight='0' frameborder='0' vspace='0' hspace='0'></iframe>");
		jQuery(arrHtml.join("")).appendTo("body");
		
	}
	
	var url = WEB_ROOT + "comm/comm_image_download.do?attachId=" + attachId +"&thumbnailId=" + thumbnailId;
	
	jQuery("#cm_download").attr("src", url);
	
}

function CmFileDown(flag, attachid) {
	if(jQuery("#cm_download").html() == null) {
		var arrHtml = [];
		arrHtml.push("<iframe id='cm_download' name='cm_download' src='about:blank' style='display:none; scrolling='auto' marginwidth='0' marginheight='0' frameborder='0' vspace='0' hspace='0'></iframe>");
		jQuery(arrHtml.join("")).appendTo("body");
	}
	
	var url = GLOBAL_WEB_ROOT + "comm/comm_download.do?attachid=" + attachid + "&flagDownCnt=" + flag;
	
	jQuery("#cm_download").attr("src", url);
}
 

//플래시 표시
function fnShowFlash(url, width, height){
   document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + width + '" height="' + height + '"  id = "movie" VIEWASTEXT>');
   document.write('<param name="movie" value="' + url + '">');
   document.write('<param name="quality" value="high">');
   document.write('<param name="wmode" value="transparent">');
   document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '" name = "movie"></embed>');
   document.write('</object>');
}

//플래시 메뉴표시
function fnShowFlashMenu(url, width, height){
   document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + width + '" height="' + height + '"  onmouseout="fnSubMenuHide()" id = "movie" VIEWASTEXT >');
   document.write('<param name="movie" value="' + url + '">');
   document.write('<param name="quality" value="high">');
   document.write('<param name="wmode" value="transparent">');
   document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '" name = "movie"></embed>');
   document.write('</object>');
}



//일정크기만큼 문자열 길이 반환(문자열, 길이, 확장자 포함 여부-Y/N)
function fnCutString(sData, iLen, isExt)
{
  	var origin_str = sData;
  	var strExt = "";
  	var return_str ="";
  	var strLen = 0;
  	var return_total = 0;
  	var temp_len=0;
  	
  	strLen = origin_str.length;
  	
  	if(isExt == "Y"){
  	   arrTemp = sData.split('.');
  	   strExt = arrTemp[arrTemp.length-1];
  	   strLen = strLen - (strExt.length + 1);
  	   iLen = iLen - (strExt.length + 1);
  	}
  	
  	for( var i=0 ; i < strLen ; i++ )
  	{
  	   var ch = origin_str.charAt(i);
  
  	   if( escape(ch).length > 4 ) return_total += 2;
  	   else if( ch != '\r' ) return_total++;
  		
  	   if( return_total > iLen )
  	   {
  					  return_total=temp_len;
  	      break;
  	   }
  	   else
  	   {
  				   return_str += ch;
  				   temp_len=return_total;
  	   }
  	}
  	
  	if(isExt == "Y"){
  	   return_str = return_str + "." + strExt;
  	}
  	
  	return return_str;
}

/******************************************************************************
 *  Function Name : jsValidBizRegNo
 *  Description   : 사업자등록번호 검사
 *  Parameters    : bizRegNo - '-'를 제외한 사업자등록번호 10자리의 문자열
 *  Example       : if (!jsValidBizRegNo("1231212345")) return;
 *  Comment       : 
 ******************************************************************************
 *  History       : 2008. 06. 25  방지한  (최초 작성)
 ******************************************************************************/
function jsValidBizRegNo(bizRegNo) {
	var	i, sum		= 0;
	var	check		= parseInt(bizRegNo.charAt(9), 10);
	var	tempBizRegNo	= new Array(10);
	var	checkValue	= new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);

	if (bizRegNo == "0000000000") {
		alert("입력항목 [사업자등록번호]의 형식이 맞지 않습니다.");
		return false;
	}

	for (i = 0; i < 10; i++)	tempBizRegNo[i]	= parseInt(bizRegNo.charAt(i), 10);

	for (i = 0; i < 10; i++)
		sum += (tempBizRegNo[i] * checkValue[i]);

	sum	+= Math.floor((tempBizRegNo[8] * 5) / 10);
	sum	%= 10;
	sum	= (sum == 0) ? 0 : (10 - sum);

	if (sum == 0)	return true;
	else {
		alert("입력항목 [사업자등록번호]의 형식이 맞지 않습니다.");
		return false;
	}
}

/******************************************************************************
 *  Function Name : jsMakeAndCheckTelNo
 *  Description   : 전화번호 검사 및 한 문자열로 변환하는 기능
 *  Parameters    : tel_no  - 전체 전화번호를 받을 form id
 *                  tel_no0 - 지역번호 또는 휴대폰 ID 번호의 form id
 *                  tel_no1 - 국번의 form id
 *                  tel_no2 - 번호의 form id
 *                  title   - 전화번호 필드의 명칭
 *                  need    - 필수 입력 여부 (true : 필수, false : 필수 아님)
 *  Example       : if (jsMakeAndCheckTelNo(document.myForm.tel_no, document.myForm.tel_no0,
 *                                          document.myForm.tel_no1, document.myForm.tel_no2,
 *                                          "휴대폰", false) return;
 *  Comment       : 
 ******************************************************************************
 *  History       : 2008. 06. 25  방지한  (최초 작성)
 ******************************************************************************/
function jsMakeAndCheckTelNo(tel_no, tel_no0, tel_no1, tel_no2, title, need) {
	var	count	= 0;

	if (tel_no0.value != "") count++;
	if (tel_no1.value != "") count++;
	if (tel_no2.value != "") count++;

	if (need && (count == 0)) {
		alert("입력항목 [" + title + "]을(를) 입력하십시오.");
//		tel_no0.focus();
		return false;
	}

	if ((count != 0) && (count != 3)) {
		alert("입력항목 [" + title + "]의 형식이 맞지 않습니다.");
//		tel_no0.focus();
		return false;
	}

	tel_no.value	= tel_no0.value + "-" + tel_no1.value + "-" + tel_no2.value;
	if ((count != 0) && ((tel_no.value.length < 11) || (tel_no.value.length > 13))) {
//		tel_no.value	= "";
		alert("입력항목 [" + title + "]의 형식이 맞지 않습니다.");
//		tel_no0.focus();
		return false;
	}

	if (tel_no.value == "--")	tel_no.value	= "";

	return true;
}

/******************************************************************************
 *  Function Name : jsCheckTelNo
 *  Description   : 전화번호 검사 기능
 *  Parameters    : tel_no0 - 지역번호 또는 휴대폰 ID 번호의 form id
 *                  tel_no1 - 국번의 form id
 *                  tel_no2 - 번호의 form id
 *                  title   - 전화번호 필드의 명칭
 *                  need    - 필수 입력 여부 (true : 필수, false : 필수 아님)
 *  Example       : if (jsCheckTelNo(document.myForm.tel_no0, document.myForm.tel_no1,
 *                                   document.myForm.tel_no2, "휴대폰번호", false) return;
 *  Comment       : 
 ******************************************************************************
 *  History       : 2008. 06. 25  방지한  (최초 작성)
 ******************************************************************************/
function jsCheckTelNo(tel_no0, tel_no1, tel_no2, title, need) {
	var	count	= 0;

	if (tel_no0.value != "") count++;
	if (tel_no1.value != "") count++;
	if (tel_no2.value != "") count++;

	if (need && (count == 0)) {
		alert("입력항목 [" + title + "]을(를) 입력하십시오.");
//		tel_no0.focus();
		return false;
	}

	if ((count != 0) && (count != 3)) {
		alert("입력항목 [" + title + "]의 형식이 맞지 않습니다.");
//		tel_no0.focus();
		return false;
	}

	var	tel_no	= tel_no0.value + "-" + tel_no1.value + "-" + tel_no2.value;
	if ((count != 0) && ((tel_no.length < 11) || (tel_no.length > 13))) {
//		tel_no.value	= "";
		alert("입력항목 [" + title + "]의 형식이 맞지 않습니다.");
//		tel_no0.focus();
		return false;
	}

	return true;
}

/* 체크박스 전체 선택, 전체 해제 */
function fnChkAll(obj1, tmpStr) {
	var obj2	= document.getElementsByName(tmpStr);
	var totCnt	= obj2.length;

	if (obj1.checked == true) {
		for (var i = 0; i < totCnt; i++ ) {
			if ( obj2[i].disabled == false) {
				obj2[i].checked = true;
			}
		}
	} else {
		for (var i = 0; i < totCnt; i++ ) {
			obj2[i].checked = false;
		}
	}
}

/* 체크박스 전체 선택 유무 체크 */
function fnChkEach(tmpStr1, tmpStr2) {
	var obj1	= document.getElementsByName(tmpStr1);
	var obj2	= document.getElementById(tmpStr2);		// 전체 선택, 전체 해제 체크박스
	var totCnt	= obj1.length;
	var bresult	= true;

	for(var i = 0; i < totCnt; i++) {
		if ( obj1[i].disabled == false && obj1[i].checked == false) {
			bresult = false;
		}
	}

	obj2.checked = bresult;
}


/* 팝업 */
function pop(pop,name,width,height,flag)
{
	var url = pop;
	var wd 	= width;
	var he 	= height;
	var obj	= null; 

	if ((window.navigator.userAgent.indexOf("SV1") != -1) || (window.navigator.userAgent.indexOf("MSIE 7") != -1)) {
		wd = wd + 8;
		he = he + 10;

		if(flag == "0" ){
			obj = window.open(url,name,"toolbar=0,menubar=0,scrollbars=no,resizable=no,width=" + wd + ",height=" + he + ";");  
		}else{  
			obj = window.open(url,name,"toolbar=0,menubar=0,scrollbars=yes,resizable=no,width=" + wd + ",height=" + he + ";");
		}
	} else {
		if (flag == "0" ) {
			obj = window.open(url,name,"toolbar=0,menubar=0,scrollbars=no,resizable=no,width=" + wd +",height=" + he + ";");
		} else {  
			obj = window.open(url,name,"toolbar=0,menubar=0,scrollbars=yes,resizable=no,width=" + wd +",height=" + he + ";");
		}
	}
	return obj;
}

function check_length(sInputStr, strLength) {

	nStrLen = calculate_byte(sInputStr);

	if ( nStrLen > strLength ) {
		return false;
	} else {
		return true;
	}

}

function calculate_byte( sTargetStr ) {
	var sTmpStr, sTmpChar;
	var nOriginLen = 0;
	var nStrLength = 0;

	sTmpStr = new String(sTargetStr);
	nOriginLen = sTmpStr.length;

	for ( var i=0 ; i < nOriginLen ; i++ ) {
		sTmpChar = sTmpStr.charAt(i);

		if (escape(sTmpChar).length > 4) {
			nStrLength += 2;
		}else if (sTmpChar!='\r') {
			nStrLength ++;
		}
	}
	return nStrLength;
}

function Cut_Str( sTargetStr , nMaxLen ) {
	var sTmpStr, sTmpChar, sDestStr;
	var nOriginLen = 0;
	var nStrLength = 0;
	var sDestStr = "";
	sTmpStr = new String(sTargetStr);
	nOriginLen = sTmpStr.length;

	for ( var i=0 ; i < nOriginLen ; i++ ) {
		sTmpChar = sTmpStr.charAt(i);

		if (escape(sTmpChar).length > 4) {
			nStrLength = nStrLength + 2;
		} else if (sTmpChar!='\r') {
			nStrLength ++;
		}

		if (nStrLength <= nMaxLen) {
			sDestStr = sDestStr + sTmpChar;
		} else {
			break;
		}
	}
	return sDestStr;
}

/* 메시지의 길이를 체크 txtObj 길이 체크할 객체, sTarget : span id, maxLength 최대 길이 */
function fnMsgLength(txtObj, sTarget, maxLength) {
	var sObj				= document.getElementById(sTarget);
	var txtLength			= 0;
	txtLength				= calculate_byte(txtObj.value);
	sObj.innerHTML			= SetNumComma(txtLength);

	if (txtLength>40) {
		$("#span_cotents_check").text("");
	}
	
	if (maxLength < txtLength) {
		sObj.innerHTML	=	"<font color='red'>" + SetNumComma(calculate_byte(txtObj.value)) + "</font>";
	}
}

/* 메시지의 길이를 체크후 submit  frm form이름, txtObj 길이 체크할 객체, maxLength 최대 길이, url 주소*/
function fnMsgLengthVal(frm, txtObj, maxLength, url) {
	var txtLength			= 0;
	txtLength				= calculate_byte(txtObj.value);
	
	if (maxLength > txtLength) {
		frm.action	=	url;
		frm.submit();
	}else{
		alert("최대 허용 문자수를 초과하였습니다.");
		txtObj.focus();
		return;
	}
}


/**
* 문자 변경
*
* @param tmpStr
* @param searchStr
* @param replaceStr  
*/
function fnReplaceAll ( tmpStr, searchStr, replaceStr) {

	while( tmpStr.indexOf( searchStr ) != -1 )	{
		tmpStr = tmpStr.replace( searchStr, replaceStr );
	}
	return tmpStr;

}

function fnChangeBr(tmpStr) {
	while(tmpStr.indexOf("\n") != -1) {
		tmpStr = tmpStr.replace("\n", "<br/>");
	}
	return tmpStr;
}

// cookie 생성
function setCookie (name, value, expiredays)
{
	var todayDate		= new Date();
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

// cookie 확인
function getCookie(name) 
{
	var nameOfCookie = name + '='; 
	var x = 0;
	while ( x <= document.cookie.length ) 
	{
		var y = (x + nameOfCookie.length);
		
		if ( document.cookie.substring( x, y ) == nameOfCookie ) 
		{
			if ( (endOfCookie=document.cookie.indexOf( ';',y )) == -1 )
				endOfCookie = document.cookie.length;
			return unescape( document.cookie.substring(y, endOfCookie ) );
		}
		x = document.cookie.indexOf( ' ', x ) + 1;
		if ( x == 0 )break;
	}
	return '';
}

function selBoxOptionCopy(selFrom, selTo)
{
	var len		= selFrom.options.length;
	
	selTo.options.length	= 0;
	
	if (len > 0)
	{
		for (var i = 0; i < len; i++)
		{
			selTo.options.add(new Option( selFrom.options[i].text, selFrom.options[i].value ));
		}
	}
}

function asciiChk(strChk) 
{
	var i; 
	var result;
	for(i=0; i<strChk.length; i++) 
	{
		if((strChk.charAt(i) < " ") || (strChk.charAt(i) > "~"))
			return false;
	}
	return true;
}

//E-mail 체크
function emailChk(email) 
{
	if (!asciiChk(email)) {
		alert("E-mail을 다시 확인해 주세요");
		return false;
	}

	var invalidStr = "\"|&;<>!*\'\\"   ;

	for (var i = 0; i < invalidStr.length; i++) 
	{
		if (email.indexOf(invalidStr.charAt(i)) != -1) 
		{
			alert("E-mail을 다시 확인해 주세요");
			return false;
		}
	}

	if (email.indexOf("@")==-1)
	{
		alert("E-mail형식이 맞지 않습니다.");
		return false;
	}

	if (email.indexOf(" ") != -1){
		alert("E-Mail에 공백이 있습니다.");
		return false;
	}

	if (window.RegExp) 
	{
		var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
		var reg2str = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$";

		var reg1 = new RegExp (reg1str);
		var reg2 = new RegExp (reg2str);
		if (reg1.test(email) || !reg2.test(email)) 
		{
			alert("E-Mail에 잘못된 문자가 있습니다.");
			return false;
		}
	}
	return true;
}

function emailChkMsg(email) {
	var resObj = {
		message : ""
		, isResult : true
	};
	
	if (!asciiChk(email)) {
		resObj.message = "E-mail을 다시 확인해 주세요";
		resObj.isResult = false;
		return resObj;
	}

	var invalidStr = "\"|&;<>!*\'\\"   ;

	for (var i = 0; i < invalidStr.length; i++) 
	{
		if (email.indexOf(invalidStr.charAt(i)) != -1) 
		{
			resObj.message = "E-mail을 다시 확인해 주세요";
			resObj.isResult = false;
			return resObj;
		}
	}

	if (email.indexOf("@")==-1)
	{
		resObj.message = "E-mail형식이 맞지 않습니다.";
		resObj.isResult = false;
		return resObj;
	}

	if (email.indexOf(" ") != -1){
		resObj.message = "E-Mail에 공백이 있습니다.";
		resObj.isResult = false;
		return resObj;
	}

	if (window.RegExp) 
	{
		var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
		var reg2str = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$";

		var reg1 = new RegExp (reg1str);
		var reg2 = new RegExp (reg2str);
		if (reg1.test(email) || !reg2.test(email)) 
		{
			resObj.message = "E-Mail에 잘못된 문자가 있습니다.";
			resObj.isResult = false;
			return resObj;
		}
	}
	
	return resObj;
	
}


function fnStrMaxCheck ( inputNode, message)
{
	var sMaxLength;
	var iMaxLength		= 0;
	try {
		sMaxLength	= inputNode.getAttribute("maxlength");
	} catch (e) {
		alert("잘못된 객체입니다.\n" + e.message);
		return false;
	}
	
	if (sMaxLength == null)
	{
		alert("maxlength 값 미설정");
		return false;
	}
	
	try {
		iMaxLength = parseInt(sMaxLength, 10);
	} catch (e) {
		alert("maxlengt 값이 없거나 숫자가 아닌 값이 있습니다.");
		return false;
	}
	
	if (calculate_byte(inputNode.value) > iMaxLength)
	{
		if (message != null && message != "")
		{
			alert(message + "\n\n" + iMaxLength + "byte 이내로 작성해 주세요.\n영문 : " + iMaxLength + "자, 한글 : " + Math.floor(iMaxLength/2) + "자" );
		}
		return false;
	}
	return true;
}

// 한글을 자름
function js_han_split(char)
{  
	var char_st = 44032; //'가'의 유니코드 넘버(10진수) 
	var char_ed = 55203; //'힝'의 유니코드 넘버(10진수)

	var arr_1st = new Array('ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ');//초성 19개 
	var arr_2nd = new Array('ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ');//중성 21개 
	var arr_3th = new Array('','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ');//종성 28개 

	if(char.length>2)
		char=char.charAt(0);
		
	var uninum = escape(char); 

	if(uninum.length<4) 
		return false;//한글이 아니다 

	uninum = parseInt(uninum.replace(/\%u/,''),16);

	if(uninum < char_st || uninum > char_ed) 
		return false;//한글이 아니다 

	var uninum2		= uninum-char_st; 
    var arr_1st_v	= Math.floor( uninum2 / 588); 

    uninum2			= uninum2 % 588; 

    var arr_2nd_v	= Math.floor(uninum2 / 28); 

    uninum2			= uninum2 % 28; 
    var arr_3th_v	= uninum2; 
    var return_arr	= new Array(arr_1st[arr_1st_v],arr_2nd[arr_2nd_v],arr_3th[arr_3th_v]); 

    return return_arr; 
}

/**
 * target 이름 완성
 * @param name
 * @param str1
 * @param str2
 * @returns
 */
function makeTargetName(name, str1, str2) {
	var lastName, strArr;
	if (name != "") {
		lastName	= name.substr(name.length-1 , 1);
		strArr		= js_han_split(lastName);
		
		if (typeof strArr != "boolean") {
			if (strArr[2] == "")
				name	+= str1;
			else
				name	+= str2;
		}
		else {
			name += str1 + "(" + str2 + ")";
		}
	}
	return name;
}

/*********************************************
 * [START] date 관련 함수
**********************************************/
/**
 * 해당월의 마지막 날자 가져오기
 * @param year
 * @param month
 * @returns
 */
function getMonthLastDay( year, month ) {
	var iYear, iMonth;
	
	if (typeof year == "number") {
		iYear	= year;
	}
	else {
		try {
			iYear	= parseInt(year, 10);
		} catch (e) {
			return 0;
		}
	}
	
	if (typeof month == "number") {
		iMonth	= month;
	}
	else {
		try {
			iMonth	= parseInt(month, 10);
		} catch (e) {
			return 0;
		}
	}
	
	if (iMonth == 12)
		return 31;
	
	var dt	= new Date(iYear, iMonth, 0);
	
	return dt.getDate();
}

/**
 * String 날짜 비교 (작은값)
 * @param date1
 * @param date2
 * @param sChar
 * @returns
 */
function getMinDate(date1, date2, sChar)
{
	if ( isDate(date1, sChar) && isDate(date2, sChar) ) {
		var dt1		= getDate(date1, sChar);
		var dt2		= getDate(date2, sChar);
		
		if (dt1.getTime() < dt2.getTime())
			return date1;
		else
			return date2;
	}
	else if ( isDate(date1, sChar) && !isDate(date2, sChar) ) {
		return date1;
	}
	else if ( !isDate(date1, sChar) && isDate(date2, sChar) ) {
		return date2;
	}
	else {
		return "";
	}
}

/**
 * String 날짜 비교 (큰값)
 * @param date1
 * @param date2
 * @param sChar
 * @returns
 */
function getMaxDate(date1, date2, sChar)
{
	if ( isDate(date1, sChar) && isDate(date2, sChar) ) {
		var dt1		= getDate(date1, sChar);
		var dt2		= getDate(date2, sChar);
		
		if (dt1.getTime() > dt2.getTime())
			return date1;
		else
			return date2;
	}
	else if ( isDate(date1, sChar) && !isDate(date2, sChar) ) {
		return date1;
	}
	else if ( !isDate(date1, sChar) && isDate(date2, sChar) ) {
		return date2;
	}
	else {
		return "";
	}
}

/**
 * String => date 로 변
 * @param sDate	: String 날
 * @param sChar : 구분자
 * @returns {Date}
 */
function getDate( sDate, sChar )
{
	var strLen		= sDate.length;
	var tmpDate		= new Date();
	var year		= 0;
	var month		= 0;
	var date		= 0;
	
	if (strLen != 10 && strLen != 8)
		return tmpDate;
	
	if (strLen == 10)
	{
		var arrDate		= sDate.split(sChar);
		
		if (arrDate.length != 3)
			return tmpDate;

		year		= parseInt(arrDate[0], 10);
		month		= parseInt(arrDate[1], 10) - 1;
		date		= parseInt(arrDate[2], 10);
	}
	else
	{
		year		= parseInt(sDate.substring(0, 4), 10);
		month		= parseInt(sDate.substring(4, 6), 10) - 1;
		date		= parseInt(sDate.substring(6, 8), 10);
	}
	
	tmpDate.setFullYear(year);
	tmpDate.setMonth(month);
	tmpDate.setDate(date);
	
	return tmpDate; 
}

/**
 * 날짜 체크
 * @param sDate
 * @param sChar
 * @returns {Boolean}
 */
function isDate( sDate, sChar)
{
	var strLen		= sDate.length;
	var tmpDate		= new Date();
	var year		= 0;
	var month		= 0;
	var date		= 0;
	
	if (strLen != 10 && strLen != 8)
		return false;
	
	if (strLen == 10) {
		var arrDate		= sDate.split(sChar);
		
		if (arrDate.length != 3)
			return false;

		year		= parseInt(arrDate[0], 10);
		month		= parseInt(arrDate[1], 10) - 1;
		date		= parseInt(arrDate[2], 10);
	}
	else {
		year		= parseInt(sDate.substring(0, 4), 10);
		month		= parseInt(sDate.substring(4, 6), 10) - 1;
		date		= parseInt(sDate.substring(6, 8), 10);
	}
	
	tmpDate.setFullYear(year);
	tmpDate.setMonth(month);
	tmpDate.setDate(date);
	
	if (tmpDate.getFullYear() == year && tmpDate.getMonth() == month && tmpDate.getDate() == date)
		return true;
	else
		return false;
}

/**
 * date => String 으로 변환
 * @param date
 * @param sChar
 * @returns {String}
 */
function dateToString(date, sChar) {
	
	if (date == undefined)
		return "";
	
	if (sChar == undefined)
		sChar = ".";
	
	var year = date.getFullYear();
	var month = date.getMonth();
	var date = date.getDate();
	
	return "" + year + sChar + (month >= 9 ? "" : "0" ) + (month + 1) + sChar + (date > 9 ? "" : "0") + date;
}

/**
 * 년.월 => String 으로 변환 
 * @param date
 * @param sChar
 * @returns {String}
 */
function yearMonthToString(date, sChar) {
	if (date == undefined) 
		return "";
	
	if (sChar == undefined)
		sChar = ".";
	
	var year = date.getFullYear();
	var month = date.getMonth();
	
	return "" + year + sChar + (month >= 9 ? "" : "0" ) + (month + 1);
}

/**
 * YHCHOI : 날짜 나타내주는 형식 변환 
 * @param date
 * @param sChar
 * @returns {String}
 */
function dateStrucChange(date, sChar) {
	
	var StringDate = date.replace("/./gi","");

    var sYear = StringDate.substring(0,4);
    var sMonth = StringDate.substring(4,6);
    var sDate = StringDate.substring(6,8);
    
	if(sChar == 1){
    
	    date = sYear+"년 "+sMonth+"월 "+sDate+"일";
	    
	}else if(sChar == 2){
		
		date = sYear+""+sMonth+""+sDate+"";
		
	}else if(sChar == 3){
		
		date = sYear+"/"+sMonth+"/"+sDate+"";
		
	}else if(sChar == 4){
		
		date = sYear+"-"+sMonth+"-"+sDate+"";
		
	}else{
		
		date = sYear+"."+sMonth+"."+sDate+"";
		
	}
	
	return date;
	
}

/*********************************************
 * [END] date 관련 함수
**********************************************/

function msgBoxHide( flag ) {
	if (flag)
		jQuery(".msgBoxHide").hide();
	else
		jQuery(".msgBoxHide").show();
}

//index 값 구하기
function fnGetIndex( obj )
{
	var target	= jQuery(obj);
	var tagName	= target.attr("tagName");
	var index	= -1;
	
	if (tagName == "INPUT") {
		var name	= target.attr("name");
		index	= jQuery("input[name='" + name + "']", this.frm ).index(target);
	}
	else {
		var id	= target.attr("id");
		index	= jQuery("#" + id, this.frm ).index(target);
	}
	return index;
}

//숫자금액을 한글로 변환
function cmChangeHangul(num) { 
    if(isNaN(num)){
    	return "";
    }
    if(num == 0 || num == "0"){
    	return "";
    }
    
	var hanA = new Array("","일","이","삼","사","오","육","칠","팔","구","십"); 
    var danA = new Array("","십","백","천","","십","백","천","","십","백","천","","십","백","천"); 
    var result = "";
    
    if(num*1 > 0){
    	for(i=0; i<num.length; i++) { 
            str = ""; 
            han = hanA[num.charAt(num.length-(i+1))]; 
            if(han != "") str = han+danA[i]; 
            if(i == 4){
            	var sum=0;
            	for(var j=i; j < 8; j++){
            		sum = sum + num.charAt(num.length-(j+1))*1;
            	}
            	if(sum > 0){
            		str += "만";
            	}
            }
            if(i == 8){
            	//만단위 숫자가 모두 0일 경우 
            	var sum=0;
            	for(var j=i; j < 12; j++){
            		sum = sum + num.charAt(num.length-(j+1))*1;
            	}
            	if(sum > 0){
            		str += "억";
            	}
            }
            if(i == 12){
            	var sum=0;
            	for(var j=i; j < 16; j++){
            		sum = sum + num.charAt(num.length-(j+1))*1;
            	}
            	if(sum > 0){
            		str += "조";
            	}
            }
            result = str + result; 
        } 
        return result; 
    }
}

function SetFloatComma(str)
{
    var tmpStr  = "" + str;
    var sResult = "";
    if (tmpStr != "")
    {
        var ArrtemStr = tmpStr.split(".");

        if(ArrtemStr.length > 1){
            tmpStr = ArrtemStr[0];
            tmpStr  = "" + parseInt(tmpStr, 10);        // 0부터 시작할 경우 앞에 0 모두 제거

            var len     = tmpStr.length;
            var cnt     = 0;

            for (i = len - 1; i >= 0; i--)
            {
                if (cnt > 0 && cnt % 3 == 0 )
                {
                    sResult  = "," + sResult;
                }
                sResult  = tmpStr.charAt(i) + sResult;
                cnt++;
            }

            sResult = sResult + "." + ArrtemStr[1];
        } else {
            tmpStr  = "" + parseFloat(tmpStr, 10);        // 0부터 시작할 경우 앞에 0 모두 제거

            var len     = tmpStr.length;
            var cnt     = 0;

            for (i = len - 1; i >= 0; i--)
            {
                if (cnt > 0 && cnt % 3 == 0 )
                {
                    sResult  = "," + sResult;
                }
                sResult  = tmpStr.charAt(i) + sResult;
                cnt++;
            }
        }
    }

    return sResult;
}

// 글자수 체크 (한글, 일본어) 
function checkTextByte(textareaName, MaxLength, spanId) {
	
	var textStr = jQuery('textarea[name='+textareaName+']').val();
    var textLength = textStr.length;
    var textChar = '';
    var count = 0;
    var countMax = MaxLength;
    var countLen = 0;
    var contStr = '';

    for (var i = 0; i < textLength; i++) {
        textChar = textStr.charAt(i);

        if (escape(textChar).length > 4) {
            count += 3;
        }
        else {  
            count++;
        }

        if (count <= countMax) {
            countLen = i + 1;
        }
    }

    if (count >= countMax) {
    	showMessageBox({
            message : MaxLength + ' Byte 以内の作成でお願いします。',
            close : function(){
                jQuery('#'+spanId).text(countMax + '/' + MaxLength + 'Byte');
            }
        });
        contStr = textStr.substr(0, countLen);
        jQuery('textarea[name="'+textareaName+'"]').val(contStr);
        count = countMax;
    }
    jQuery('#'+spanId).text(count + '/' + MaxLength + 'Byte');
}


//글자 카운트
function updateInputCount(textareaname,MaxLength,spanid){
	
	if(checkVailidation(textareaname)){
			
	    /*var textStr = jQuery('textarea[name='+textareaname+']').val();*/
		var textStr = jQuery('#'+textareaname).val();
	    var textLength = textStr.length;
	    var textChar = "";
	    var count = 0;
	    var countMax = MaxLength;
	    var countLen = 0;
	    var textStr2 = "";
	
	    for(var i = 0; i < textLength; i++){
	        // 한글자추출
	        textChar = textStr.charAt(i);
	
	        // 한글이면 2를 더한다.
	        //console.log(escape(textChar).length);
	        if (escape(textChar).length > 4) {
	            count += 3;
	        }
	        else {   // 그밗의 경우는 1을 더한다.
	            count++;
	        }
	
	        // 전체 크기가 countMax 넘지않으면
	        if(count <= countMax){
	            countLen = i + 1;
	        }
	    }
	
	    if(count > countMax){
	    	
	        showMessageBox({
	            //message : "한글"+MaxLength/2+"글자, 영문"+MaxLength+"글자를 초과 입력할수 없습니다. \n초과된 내용은 삭제 됩니다.",
	            message : "在谈到最多可以有"+MaxLength/3+"个字符（英文"+MaxLength+"字）",
	            close : function(){
	                jQuery('span.'+spanid).text(countMax);
	            }
	        });
	        textStr2 = textStr.substr(0, countLen);
	        jQuery('textarea[name='+textareaname+']').val(textStr2);
	        count = countMax;
	
	    }
	    jQuery('#'+spanid).text(count);
	}
}
//베트남어 , 영어 , 숫자 , 공백 , 엔터 및 기본 특수기호 만 입력가능하게 유효성 걸기
function checkVailidation(textareaname) {
	var contents = jQuery('#'+textareaname).val();
	var charUini;
	for(var i=0 ; i<contents.length ; i++)
	{
		charUini = escape( contents[i] ) 
		charUini = charUini.replace('%','');
			
		/*console.log("unicode : "+charUini);*/
		if(contents[i].search(/[0-9|a-z|A-Z|?|.| |\n|]/) != -1 ){ continue; } // 특수기호 (베트남어 사용시 필요) , 숫자 , 알파벳 ,공백 , 띄어쓰기
		else if (contents[i].search(/[`|~|'|"|^|/|*|]/) != -1 ||charUini == '5C'){continue;} // 베트남어 사용시 필요한 특수기호
		/* 베트남어 */
		else if ('A1'<= charUini && charUini <='FF'){ continue;}
		else if('u0100'<= charUini && charUini <='u017F'){ continue; } 
		else if('u0180'<= charUini && charUini <='u024F'){ continue; } 
		else if('u1E00'<= charUini && charUini <='u1EF9'){ continue; }
		
		alert(JshowMessageAlert("alert.order_step1.plase_vietnam")); //  베트남어 , 영어 , 숫자만 사용가능합니다.
		contents = contents.substr(0, i);
		jQuery('#'+textareaname).val(contents);
		return false;
			
	}
	
	return true;
}

//list
function cmGoList(formName, urlName, parsName) {
    var frm		= jQuery("form[name='"+ formName + "']");
    var url		= jQuery.trim(jQuery("input[name='" + urlName + "']", frm).val());
    var pars	= jQuery.trim(jQuery("input[name='" + parsName + "']", frm).val());

    if (url == "") {
        alert(urlName + " 값이 없습니다.");
        return;
    }

    if (pars != "") {
        document.location.href	= url + "?" + pars;
    }
    else {
        document.location.href	= url;
    }
}

/**
 * 2010.10.10 형식을 다른 형식으로 변환
 * @param dateStr
 * @param typeString ( DATEFORMAT : 20101010, 명시안함 : 2010년 10월 10일 )
 * @return 문자열
 */
function changeDate(dateStr, typeString) {

    var dateStrAry = dateStr.split(".");
    var returnStr = "";

    if (typeString == "DATEFORMAT")
    {
        returnStr += dateStrAry[0];
        returnStr += dateStrAry[1];
        returnStr += dateStrAry[2];
    }
    else {
        returnStr += dateStrAry[0] + "년 ";
        returnStr += dateStrAry[1] + "월 ";
        returnStr += dateStrAry[2] + "일 ";
    }

    return returnStr;
}

/**
 * 숫자를 시간으로 변경
 * 15시 30분 (1530) => 155
 * @param numberStr
 * @return
 */
function changeNumberToHhMm ( numberStr ) {

    var sHhMm = "";

    var sHh = parseInt((parseInt(numberStr, 10) / 10), 10);

    var sMm = numberStr.substr((numberStr.length - 1), (numberStr.length - 1));

    if(sMm == "" && numberStr == "0"){
        sMm = "0";
    }

    sHhMm = (sHh < 10 ? "0"+sHh : sHh) + ( sMm == "0" ? "00" : "30" ) ;

    return sHhMm;
}

/**
 * 숫자를 시간으로 변경
 * 15시 30분 (1530) => 15:5
 * @param numberStr
 * @return
 */
function changeNumberToHhMm2 ( numberStr ) {

    var sHhMm = "";

    var sHh = parseInt((parseInt(numberStr, 10) / 10), 10);

    var sMm = numberStr.substr((numberStr.length - 1), (numberStr.length - 1));

    if(sMm == "" && numberStr == "0"){
        sMm = "0";
    }

    sHhMm = (sHh < 10 ? "0"+sHh : sHh) +":"+ ( sMm == "0" ? "00" : "30" ) ;

    return sHhMm;
}

/**
 * 시간을 숫자로 변경
 * 155 => 15시 30분 (1530)
 * @param HhMmStr
 * @return
 */
function changeHhMmToNumber ( HhMmStr )
{
    var sHh = parseInt((parseInt(HhMmStr, 10) / 10), 10);

    var sMm = HhMmStr.substr((HhMmStr.length - 1), (HhMmStr.length - 1));

    if(sMm == "" && HhMmStr == "0"){
        sMm = "0";
    }

    var sNumber1 = sHh < 10 ? "0"+sHh : sHh;
    var sNumber2 = sMm == "0" ? "00" : "30";

    return sNumber1 + sNumber2;
}

function addThumnailImagePop(target, p_opt) {

    if (target == undefined || target == null) {
        target = jQuery(".lrk_thumbnail_image");
    }

    target.click(function (event) {
        event.preventDefault();
        var src = jQuery(this).attr("src");
        var ext = src.substring(src.lastIndexOf("."), src.length);
        var url = src.substring(0, src.lastIndexOf("_"));

        var temp_frm = jQuery("<form name='temp_thumbnail_frm'/>");
        temp_frm.appendTo("body");
        temp_frm.attr({"action" : url + ext, "target": "_blank"});
        temp_frm.submit();
        temp_frm.remove();
    });
}

function getBrowserInfo() {
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName = navigator.appName;
	var fullVersion = '' + parseFloat(navigator.appVersion);
	var majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;
	
	if( (verOffset = nAgt.indexOf("Opera")) != -1 ) { //In Opera, the true version is after "Opera" or after "Version"
		browserName = "Opera";
		fullVersion = nAgt.substring(verOffset + 6);
		if( (verOffset = nAgt.indexOf("Version")) != -1 ) {
			fullVersion = nAgt.substring(verOffset + 8);
		}
	} else if( (verOffset = nAgt.indexOf("MSIE")) != -1 ) { //In MSIE, the true version is after "MSIE" in userAgent
		browserName = "Microsoft Internet Explorer";
		fullVersion = nAgt.substring(verOffset + 5);
	} else if( (verOffset = nAgt.indexOf("Chrome")) != -1 ) { //In Chrome, the true version is after "Chrome"
		browserName = "Chrome";
		fullVersion = nAgt.substring(verOffset + 7);
	} else if( (verOffset = nAgt.indexOf("Safari")) != -1 ) { //In Safari, the true version is after "Safari" or after "Version"
		browserName = "Safari";
		fullVersion = nAgt.substring(verOffset + 7);
		if( (verOffset = nAgt.indexOf("Version")) != -1 ) {
			fullVersion = nAgt.substring(verOffset + 8);
		}
	} else if( (verOffset = nAgt.indexOf("Firefox")) != -1 ) { // In Firefox, the true version is after "Firefox"
		browserName = "Firefox";
		fullVersion = nAgt.substring(verOffset + 8);
	} else if( (nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf(verOffset + 1)) ) { //In most other browsers, "name/version" is at the end of userAgent
		browserName = nAgt.substring(nameOffset, verOffset);
		fullVersion = nAgt.substring(verOffset + 1);
		if(browserName.toLowerCase() == browserName.toUpperCase()) {
			browserName = navigator.appName;
		}
	}
	
	//trim the fullVersion string at semicolon/space if present
	if( (ix = fullVersion.indexOf(";")) != -1 ) {
		fullVersion = fullVersion.substring(0, ix);
	}
	
	if( (ix = fullVersion.indexOf(" ")) != -1 ) {
		fullVersion = fullVersion.substring(0, ix);
	}
	
	majorVersion = parseInt('' + fullVersion, 10);
	if(isNaN(majorVersion)) {
		fullVersion = '' + parseFloat(navigator.appVersion);
		majorVersion = parseInt(navigator.appVersion, 10);
	}
	
	var obj = {
		browserName : browserName
		, fullVersion : fullVersion
		, majorVersion : majorVersion
	};
	return obj;
}

//파일 사이즈 
function getFileSize(fileSize) {
	fileSize = parseInt(fileSize);
	var sReturn = "";
	if(fileSize >= (1 * 1024 * 1024 * 1024)) {
		sReturn = SetNumComma(Math.ceil(fileSize / 1024 / 1024 / 1024)) + "GB";
	} else if(fileSize >= (1 * 1024 * 1024)) {
		sReturn = SetNumComma(Math.ceil(fileSize / 1024 / 1024)) + "MB";
	} else if(fileSize >= (1 * 1024)) {
		sReturn = SetNumComma(Math.ceil(fileSize / 1024)) + "KB";
	} else if(fileSize > 0) {
		sReturn = "1KB";
	}
	return sReturn;
}

//문자열 크기 비교
function fnStringByte(targetString) {
	var tempStr, tempChar;
	var originalLength = 0;
	var stringLength = 0;
	
	tempStr = new String(targetString);
	originalLength = tempStr.length;
	
	for(var i=0; i<originalLength; i++) {
		tempChar = tempStr.charAt(i);
		if(escape(tempChar).length > 4) {
			stringLength += 2;
		} else if(tempChar != '\r') {
			stringLength++;
		}
	}
	return stringLength;
}

function calculate_byte( sTargetStr ) {
	var sTmpStr, sTmpChar;
	var nOriginLen = 0;
	var nStrLength = 0;

	sTmpStr = new String(sTargetStr);
	nOriginLen = sTmpStr.length;

	for ( var i=0 ; i < nOriginLen ; i++ ) {
		sTmpChar = sTmpStr.charAt(i);

		if (escape(sTmpChar).length > 4) {
			nStrLength += 3;
		}else if (sTmpChar!='\r') {
			nStrLength ++;
		}
	}
	return nStrLength;
}

function addErrorMessage_bak(target, msg) {
	var old_bgcolor = target.css("border-color");
	var name = target.attr("name");
	var index = jQuery("*[name='"+ name +"']").index(target);
	var msgTarget = jQuery(".error_" + name);
	
	if (msgTarget.size() > index) {
		var data_msg = msgTarget.eq(index).data("error_old_msg");
		var old_msg = msgTarget.eq(index).text();
		
		msgTarget.eq(index).text(msg);
		if (data_msg == null)
			msgTarget.eq(index).data("error_old_msg", old_msg);
	}
	
	target.css({"border-color": "#7cdae"});
	msgTarget.css({"font-weight": "bold"});
	
	//target.css({"border": "3px solid #ff6980"});
	
	target.data("error_old_bgcolor", old_bgcolor);
	target.addClass("error_message");
}

function removeErrorMessageTarget(target) {
	jQuery(".error_" + target.attr("name")).text("");
}

function removeErrorMessage() {
	var target = jQuery(".error_message");
	
	target.each(function (n) {
		var old_bgcolor  = jQuery(this).data("error_old_bgcolor");
		jQuery(this).css({"border-color": old_bgcolor});
		
		var name = jQuery(this).attr("name");
		var index = jQuery("*[name='"+ name +"']").index(target);
		var msgTarget = jQuery(".error_" + name);
		
		if (msgTarget.size() > index) {
			var old_msg = msgTarget.eq(index).data("error_old_msg");
			msgTarget.eq(index).text(old_msg);
		}
		jQuery(this).removeClass("error_message");
	});
}

function removeErrorMessageForTarget(name) {
    var target = jQuery("*[name='"+ name +"']");

    target.each(function (n) {
        var old_bgcolor  = jQuery(this).data("error_old_bgcolor");
        jQuery(this).css({"border-color": old_bgcolor});

        var name = jQuery(this).attr("name");
        var index = jQuery("*[name='"+ name +"']").index(target);
        
        var msgTarget = jQuery(".error_" + name);

        if (msgTarget.size() > index) {
            var old_msg = msgTarget.eq(index).data("error_old_msg");
            msgTarget.eq(index).text(old_msg);
        }
        jQuery(this).removeClass("lirikos_error_message");
    });
}


//사업자 등록번호 체크
function checkBizID(bizID) {
	// bizID는 숫자만 10자리로 해서 문자열로 넘긴다. 
	var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1); 
	var i, chkSum = 0, c2, remander;
    
	bizID = bizID.replace(/-/gi,''); 
	
	if (bizID.length < 10) {
		return false;
	}

	for (i=0; i<=7; i++) {
    	chkSum += checkID[i] * bizID.charAt(i);
	}
    
	c2 = "0" + (checkID[8] * bizID.charAt(8)); 
	c2 = c2.substring(c2.length - 2, c2.length); 
	chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1)); 
	remander = (10 - (chkSum % 10)) % 10 ; 

    if (Math.floor(bizID.charAt(9)) == remander) {
    	return true ; // OK!
    } 
	return false; 
}

// 휴대폰 번호 체크
function checkMobile(mobile) {
	
	var len = mobile.length;
	
	if (len > 11 || len < 10) {
		return false;
	}
	
	var mobile1, mobile2, mobile3;
	
	if (len == 11) {
		mobile1 = mobile.substr(0, 3);
		mobile2 = mobile.substr(3, 4);
		mobile3 = mobile.substr(7, 4);
	}
	else {
		mobile1 = mobile.substr(0, 3);
		mobile2 = mobile.substr(3, 3);
		mobile3 = mobile.substr(6, 4);
	}
	
	var patten1 = /01[016789]$/;		
	var patten2 = /[1-9]{1}[0-9]{2,3}$/;
	var patten3 = /[0-9]{4}$/;
	
	if (!patten1.test(mobile1)) {
		return false;
	}
	else if (!patten2.test(mobile2)) {
		return false;
	}
	else if (!patten3.test(mobile3)) {
		return false;
	}
	return true;
}

/**
 * Web Parameter 문자열(Query String)을 JSON 구조로 파싱한다.
 * @param param
 */
function CmParameterParseToJSON(param) {
	var	json	= {};
	var	params	= param.split("&");

	for (var i = 0; i < params.length; i++) {
		var	pair	= params[i].split("=");
		json[pair[0]]	= pair[1];
	}

	return json;
}

function changeDatePatten (sDate) {
    var result = '';

    if (sDate != null && sDate.length >= 8) {
        result += sDate.substring(0, 4) + '.' + sDate.substring(4, 6) + '.' + sDate.substring(6, 8);
    } else if (sDate != null && sDate.length() >= 6) {
        result += sDate.substring(0, 4) + '.' + sDate.substring(4, 6);
    }

    return result;
}

function changeDatePatten2 (sDate,sChar) {
	var result = '';
	
	if (sDate != null && sDate.length >= 8) {
		result += sDate.substring(0, 4) + sChar + sDate.substring(4, 6) + sChar + sDate.substring(6, 8);
	} else if (sDate != null && sDate.length() >= 6) {
		result += sDate.substring(0, 4) + sChar + sDate.substring(4, 6);
	}
	
	return result;
}

function changeDatePatten3 (sDate,sChar) {
	var result = '';
	
	if (sDate != null && sDate.length >= 8) {
		result += sDate.substring(0, 4) + " 年  " + sDate.substring(4, 6) + " 月  " + sDate.substring(6, 8) + " 日";
	} else if (sDate != null && sDate.length() >= 6) {
		result += sDate.substring(0, 4) + sChar + sDate.substring(4, 6);
	}
	
	return result;
}
//해당 날짜를 현재시간 기준 ~~분전 ~시간 전 어제~시 등의 형식으로 나타내기
function changeBeforeDate(date){
	var sResult = "";
		
		var	starDate	= new Date(date.substring(0, 4), parseInt(date.substring(4, 6), 10) - 1, date.substring(6, 8),
				date.substring(8, 10), date.substring(10, 12), 0);
		
		if (12 <= date.length) {
			date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
					+ " " + date.substring(8, 10) + ":" + date.substring(10, 12); 
			
			var	endDate		= new Date();
			var gap	= parseInt((endDate.getTime() - starDate.getTime()) / 1000 /60);
			
			if(gap == 0){
				sResult = "방금";
			}
			else if(gap<60){
				sResult = gap + "분전";
			}
			else if(gap>=60 && gap<(60*24)){
				sResult = parseInt((gap / 60)) + "시간전";
			}
			else if(gap >= (60 * 24) && gap <(60 * 48)){
				
				var time =starDate.getHours();
			var minute = starDate.getMinutes();
			sResult = time >12 ? "어제 오후 " + (time - 12) + ":" + minute : "어제 오전 " + time +":" + minute;
			}
			else{
				sResult = date;
			}						
		}
		return sResult;
}

function changeBeforeDate2(date){
	var sResult = "";
		
		var	starDate	= new Date(date.substring(0, 4), parseInt(date.substring(4, 6), 10) - 1, date.substring(6, 8),
				date.substring(8, 10), date.substring(10, 12), 00);
		
		if (12 <= date.length) {
			date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8);
			
			var	endDate		= new Date();
			var gap	= parseInt((endDate.getTime() - starDate.getTime()) / 1000 /60);
			
			/*if(gap == 0){
				sResult = "방금";
			}
			else if(gap<60){
				sResult = gap + "분전";
			}
			else if(gap>=60 && gap<(60*24)){
				sResult = parseInt((gap / 60)) + "시간전";
			}
			else if(gap >= (60 * 24) && gap <(60 * 48)){
				
				var time =starDate.getHours();
			var minute = starDate.getMinutes();
			if(time == "00"){
				time = 24;
			}else if(time<10){
				time = "0" + time;
			}
			if(minute <10){
				minute="0"+minute;
			}
			sResult = "어제 " + time +":" + minute;
			}
			else{*/
				sResult = date;
			//}						
		}
		return sResult;
}
function changeBeforeDate3(date){
	var sResult = "";
	
		//if (8 <= date.length) {
			date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8);
			
			sResult = date;
		//}
		return sResult;
}
//해당 날짜를 현재시간 기준 으로 하루가 지나지 않았으면 시:분 하루가 지났으면 년월일 시간 으로 표시
function changeTodayDate(date){
	var sResult = "";
	
	var	starDate	= new Date(date.substring(0, 4), parseInt(date.substring(4, 6), 10) - 1, date.substring(6, 8),
			date.substring(8, 10), date.substring(10, 12), 00);
	
	if (12 <= date.length) {
		date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
				+ " " + date.substring(8, 10) + ":" + date.substring(10, 12); 
		
		var	endDate		= new Date();
		var gap	= parseInt((endDate.getTime() - starDate.getTime()) / 1000 /60);
		
		if(gap<(60*24)){
			var time =starDate.getHours();
		var minute = starDate.getMinutes();
		if(minute<10){
			minute="0"+minute;
			}
			sResult = time +":"+minute ;
		
		}
		else {
			
			sResult = date;
		}
	}
	return sResult;
}

function changeDateHour(date) {
	var sResult = "";
	
	if (12 <= date.length) {
		date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
				+ " " + date.substring(8, 10) + ":" + date.substring(10, 12);
	}
	
	sResult = date;
	
	return sResult;
}

function subStrChangStr(str,index,repl) {
	var cnt = str.length;
	if(cnt > index){
		str = str.substring(0,index);
		str += repl;
	}
	
	return str;
}

/**
 * 상품 검색필터에서 사용함
 * @param str
 * @param type
 * @returns {Number}
 */
function getProdBitFilter( str, type ) {
	
	var arrParam;
	
	switch (type) {
	case "prdService" :
		arrParam = [
            "DG_P001"
            , "DG_P002"
            , "DG_P019"
        ];
		break;
	case "prdFeature" :
		arrParam = [
			"DG_P003"
			, "DG_P004"
			, "DG_P005"
			, "DG_P006"
			, "DG_P007"
			, "DG_P008"
			, "DG_P017"
			, "DG_P011"
			, "DG_P012"
			, "DG_P010"
			, "DG_P009"
		];
		break;
	case "prdPrice" :
		arrParam = [
            "DG_P013"
            , "DG_P014"
            , "DG_P015"
            , "DG_P016"
        ];
		break;
	case "prdFunc" :
		arrParam = [
            "DR_001"
            , "DR_002"
            , "DR_003"
        ];
		break;
	case "prdSkin" :
		arrParam = [
            "AT010"
            , "AT011"
            , "AT012"
            , "AT013"
            , "AT014"
            , "AT017"
        ];
		break;
	case "prdTrubleType" :
		arrParam = [
            "DW_0101"
            , "DW_0102"
            , "DW_0103"
            , "DW_0104"
            , "DW_0105"
            , "DW_0106"
            , "DW_0107"
        ];
		break;
	case "optMakeupeft" :
		arrParam = [
            "DI_001"
            , "DI_002"
            , "DI_003"
            , "DI_004"
            , "DI_005"
            , "DI_006"
            , "DI_007"
            , "DI_008"
            , "DI_009"
            , "DI_010"
            , "DI_011"
            , "DI_012"
            , "DI_013"
            , "DI_014"
            , "DI_015"
            , "DI_016"
            , "DI_017"
            , "DI_018"
            , "DI_019"
            , "DI_020"
            , "DI_021"
        ];
		break;
	default :
		arrParam = [];
		break;
	}
	
	var len = arrParam.length;
	var num = 0;
	
	for (var i = 0; i < len; i++) {
		if (str.indexOf(arrParam[i]) > -1) {
			num += Math.pow(2, len - i - 1);
		}
	}
	
	return num;
}


function getFilterHtmlTag(str) {
	if(str == "" || str == undefined) {
		return;
	}
	
	var arrStr = str.split(";");
	
	var html = [];
	for(var i=0; i<arrStr.length; i++) {
		var type = arrStr[i].split(",")[2];
		
		var num = 0;
		if(type == "SERVICE") {
			num = 1;
		} else if(type == "PRICE") {
			num = 2;
		} else {
			num = 3;
		}
		
		if(arrStr[i].split(",")[0] !="" ) {
			html.push("<span class=\"ico_srvAlim srv"+num+"\" style=\"margin-right:2px;\">"+arrStr[i].split(",")[1]+"</span>");
		}
	}
	
	return html.join("");
}

function changeAgeYear(birthyear){
	var cAge = null;
	if(birthyear == ""){
		return "";
	}
	var birthyear2 = parseInt(birthyear);
	var today = new Date();
	var year = today.getFullYear();
	var year2 = parseInt(year);
	var age = year2 - birthyear2 +1;
	var first_age = parseInt(age/10);
	var last_age = parseInt(age%10);
	
	if(age<10){
		cAge = "10대 이하";
	}else if(age>49){
		cAge = "50대 이상";
	}else if(last_age>=0 && last_age<4){
		cAge = first_age+"0대 초반";
	}else if(last_age>3 && last_age<7){
		cAge = first_age+"0대 중반";
	}else if(last_age>6 && last_age<=9){
		cAge = first_age+"0대 후반";
	}
	return cAge;
	
}

function updateMobileVoteCnt(reviewcd, type, idx) {
	if(!IS_LOGIN) {
		showConfirmBox({
			message : "해당 서비스는 로그인한 고객만 사용할 수 있습니다. 로그인하시겠습니까?"
			, ok_func : function() {
				var returnUrl = $("#returnUrl").val()+"?"+$("#returnParam").val();
				alert(returnUrl);
				MobileBodyStart.goLogin(returnUrl);
			}
		});
	} else {
		MobileCommon.ajax({
			url : GLOBAL_WEB_ROOT + "mobile/shop/mobile_shop_review_vote_save.do"
			, type : "POST"
			, data : {
				reviewcd : reviewcd
				, type : type
				, regChannel : "MOBILE"
			}
			, dataType : "json"
			, animation : false
			, async : false
			, success : function(data, textStatus) {
				if(data.status == "succ") {
					
					if(data.object == "vote") {
						var preCnt = parseInt(SetNum($(".span_voteCnt").eq(idx).text()));
						
						$(".span_voteCnt").eq(idx).text(SetNumComma(preCnt+1));
						$(".btn_vote").eq(idx).text("취소");
					} else {
						var preCnt = parseInt(SetNum($(".span_voteCnt").eq(idx).text()));
						
						$(".span_voteCnt").eq(idx).text(SetNumComma(preCnt-1));
						$(".btn_vote").eq(idx).text("네");
					}
				} else if(data.status == "isNotLogin") {
					showConfirmBox({
						message : "해당 서비스는 로그인한 고객만 사용할 수 있습니다. 로그인하시겠습니까?"
						, ok_func : function() {
							var returnUrl = $("#returnUrl").val()+"?"+$("#returnParam").val();
							
							MobileBodyStart.goLogin(returnUrl);
						}
					});
				}
				else {
					showMessageBox({
						message : data.message
					});
				}
			}
		});
	}
}

function updateVoteCnt(reviewcd, type, idx) {
	if(!IS_LOGIN) {
		showConfirmBox({
			message : "해당 서비스는 로그인한 고객만 사용할 수 있습니다. 로그인하시겠습니까?"
			, ok_func : function() {
				var returnUrl = $("#returnUrl").val()+"?"+$("#returnParam").val();
				WebBodyStart.goLogin(returnUrl);
			}
		});
	} else {
		cmAjax({
			url : GLOBAL_WEB_ROOT + "mobile/shop/mobile_shop_review_vote_save.do"
			, type : "POST"
			, data : {
				reviewcd : reviewcd
				, type : type
				, regChannel : "PC"
			}
			, dataType : "json"
			, animation : false
			, async : false
			, success : function(data, textStatus) {
				if(data.status == "succ") {
					if(data.object == "vote") {
						var preCnt = parseInt(SetNum($(".span_voteCnt").eq(idx).text()));
						
						$(".span_voteCnt").eq(idx).text(SetNumComma(preCnt+1));
						$(".btn_vote").eq(idx).text("취소");
					} else {
						var preCnt = parseInt(SetNum($(".span_voteCnt").eq(idx).text()));
						
						$(".span_voteCnt").eq(idx).text(SetNumComma(preCnt-1));
						$(".btn_vote").eq(idx).text("네");
					}
				} else if(data.status == "isNotLogin") {
					showConfirmBox({
						message : "해당 서비스는 로그인한 고객만 사용할 수 있습니다. 로그인하시겠습니까?"
						, ok_func : function() {
							var returnUrl = $("#returnUrl").val()+"?"+$("#returnParam").val();
							
							WebBodyStart.goLogin(returnUrl);
						}
					});
				}
				else {
					showMessageBox({
						message : data.message
					});
				}
			}
		});
	}
}

function rgbToHsv(color) {
	var colors = [];
	
	var r = parseInt(color.substring(0,2), 16)/255;
	var g = parseInt(color.substring(2,4), 16)/255;
	var b = parseInt(color.substring(4,6), 16)/255;
	
	var max = Math.max.apply(Math, [r,g,b]);
	var min = Math.min.apply(Math, [r,g,b]);
	
	/*var h = (max + min)/2;
	var s = (max + min)/2;
	var l = (max + min)/2;
	
	if(max == min) {
		h = 0;
		s = 0;
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2-max-min) : d/(max + min);
		switch(max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	        case g: h = (b - r) / d + 2; break;
	        case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	
	colors.push({h : h * 360, s : s*100, l : l * 100});*/
	var chr = max - min;
	var hue = 0;
	var val = max;
	var sat = 0;
	
	if(val > 0) {
		sat = chr/val;
		if(sat > 0) {
			if(r == max) {
				hue = 60*(((g-min)-(b-min))/chr);
				if (hue < 0) {hue += 360;}
			} else if (g == max) { 
                hue = 120+60*(((b-min)-(r-min))/chr); 
            } else if (b == max) { 
                hue = 250+60*(((r-min)-(g-min))/chr); 
            }
		}
	}
	
	return {
		h : hue
		, s : sat
		, v : val
		, color : color
	};
}

/*function sortColors(colorStr) {
	var arrColors = colorStr.split(",");
	var hslArr = new Array();
	for(var i=0; i<arrColors.length; i++) {
		hslArr[i] = [rgbToHsl(arrColors[i]), i];
	}
	
	
	var sortedHslArr = new Array();
	outerloop :
	for(var i=0; i<hslArr.length; i++) {
		for(var j=0; j<sortedHslArr.length; j++) {
			
			if(sortedHslArr[j][0][0] == undefined || sortedHslArr[j][0][0] == "") {
				sortedHslArr[j][0][0] = hslArr[i][0][0];
			}
			
			if(sortedHslArr[j][0][0] > hslArr[i][0][0]) {
				sortedHslArr.splice(j, 0, hslArr[i]);
				continue outerloop;
			}
		}
		sortedHslArr.push(hslArr[i]);
	}
	var sortedRgbArr = new Array();
	
	for(var i=0; i<sortedHslArr.length; i++) {
		sortedRgbArr[i] = arrColors[sortedHslArr[i][1]];
	}
	
	return sortedRgbArr;
}*/
function sortColors(colorStr) {
	var arrColors = colorStr.split(",");
	var r, g, b, i, f, p, q, t;
	var colors = [];
	var arrRgb = [];
	var arrSortColors = [];
	for(var i=0; i<arrColors.length; i++) {
		colors = rgbToHsv(arrColors[i]);
		
		arrSortColors.push(colors);
	}
	
	arrSortColors.sort(function(a, b) {return a.h - b.h;});
	
	/*for(var j=0; j<arrSortColors.length; j++) {
		var h = arrSortColors[j].h;
		var s = arrSortColors[j].s;
		var v = arrSortColors[j].v;
		var c = arrSortColors[j].color;
		i = Math.floor(h * 6);
	    f = h * 6 - i;
	    p = v * (1 - s);
	    q = v * (1 - f * s);
	    t = v * (1 - (1 - f) * s);
	    
	    switch (i % 6) {
	        case 0: r = v, g = t, b = p; break; 
	        case 1: r = q, g = v, b = p; break;
	        case 2: r = p, g = v, b = t; break;
	        case 3: r = p, g = q, b = v; break;
	        case 4: r = t, g = p, b = v; break;
	        case 5: r = v, g = p, b = q; break;
	        default : 
	        	r = 0, g = 0, b = 0;
	        	break;
	    }
	    
	    arrRgb.push({
	        r: Math.floor(r * 255),
	        g: Math.floor(g * 255),
	        b: Math.floor(b * 255),
	        color : c
	    });
	    
	    console.log(c);
	}*/
	
	return arrSortColors;
}

function hsvToRgb(h, s, v) {
	h = h * 1.0;
	s = s * 1.0;
	v = v * 1.0;
	
	var obj = {
		r : 0
		, g : 0
		, b : 0
	};
	
	var ang = h / 60;
	var angf = Math.floor(ang);
	var ha = angf%6;
	var f=ang-angf;
	var p = v * (1-s);
	var q=v*(1-f*s);
    var t=v*(1-(1-f)*s);
    
    if(ha == 0) {
    	obj.r = Math.floor(v*255);
    	obj.g = Math.floor(t*255);
    	obj.b = Math.floor(p*255);
    } else if(ha == 1) {
    	obj.r=Math.floor(p*255);
    	obj.g=Math.floor(v*255);
    	obj.b=Math.floor(t*255);
    } else if(ha == 2) {
    	obj.r=Math.floor(p*255);
        obj.g=Math.floor(v*255);
        obj.b=Math.floor(t*255);
    } else if(ha == 3) {
    	obj.r=Math.floor(p*255);
        obj.g=Math.floor(q*255);
        obj.b=Math.floor(v*255);
    } else if(ha == 4) {
    	obj.r=Math.floor(t*255);
    	obj.g=Math.floor(p*255);
    	obj.b=Math.floor(v*255);
    } else if(ha == 5) {
    	obj.r=Math.floor(v*255);
    	obj.g=Math.floor(p*255);
    	obj.b=Math.floor(q*255);
    }
    
    return obj;
}

function getFilterHtmlTagForWeb (str) {
	
	if(str != undefined && str != "") {
		return "";
	}
	
	var html = [];
	var arrTag = str.split(";");
	
	var type = "";
	
	for(var i=0; i<arrTag.length; i++) {
		type = arrTag[i].split(",")[0];
		
		if(type !="DG_P018" && type != "DG_P017") {
			html.push("<span class=\"ico_srvAlim2 srv\""+type+"\">"+arrTag[i].split(",")[1]+"</span>");
		}
	}
	
	return html.join("");
}

//YHCHOI : 에러 메세지 노출.
function addErrorMessageBox(target,message){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $(".error_" + name);
	
	if (msgTarget.size() > index) {
		msgTarget.eq(index).text("* " + message);
		msgTarget.eq(index).removeClass("error_hide");
	}
	
	target.addClass("error");

}

//YHCHOI : 에러 메세지 삭제.
function removeErrorMessageBox(target){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $(".error_" + name);

	if (msgTarget.size() > index) {

		msgTarget.addClass("error_hide");
		
	}
	
	target.removeClass("error");
	
}

//YHCHOI : 전체 삭제
function removeErrorMessage() {
	var target = $(".error");
	
	target.each(function (n) {
		
		var name = $(this).attr("name");
		var index = $("*[name='"+ name +"']").index(target);
		var msgTarget = $(".error_" + name);
		
		if (msgTarget.size() > index) {
			msgTarget.addClass("error_hide");
		}
		
		target.removeClass("error");
	});
}

//YHCHOI : 에러 메세지 삭제.
function removeWebErrorMessageBox(target){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $(".error_" + name);

	if (msgTarget.size() > index) {

		msgTarget.eq(index).addClass("error_hide");
		
	}
	
	target.parent().removeClass("error");
	
}

//YHCHOI : 에러 메세지 삭제.
function removeWebErrorMessageBox2(target,msgTarget){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);

	if (msgTarget.size() > index) {

		msgTarget.addClass("error_hide");
		
	}
	
	target.parent().removeClass("error");
	
}

//YHCHOI : 전체 삭제
function removeWebErrorMessage() {
	var target = $(".error");
	
	target.each(function (n) {
		
		var name = $(this).attr("name");
		var index = $("*[name='"+ name +"']").index(target);
		var msgTarget = $(".error_" + name);
		
		if (msgTarget.size() > index) {
			msgTarget.addClass("error_hide");
		}
		
		target.parent().removeClass("error");
	});
}

//YHCHOI : 전체 삭제
function removeWebErrorMessage2() {
	$(".error").removeClass("error");
	$("[class*=error_]").addClass("error_hide");
}

//YHCHOI : 에러 메세지 노출.
function addWebErrorMessageBox(target,message){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $(".error_" + name);
	
	if (msgTarget.size() > index) {
	
		msgTarget.eq(index).text("* " + message);
		msgTarget.eq(index).removeClass("error_hide");
		
	}
	
	target.parent().addClass("error");

}

//YHCHOI : 에러 메세지 노출.
function addWebErrorMessageBox2(target,message,msgTarget){
	var name = target.attr("name");
	var index = $("*[name='"+ name +"']").index(target);

	if(msgTarget == null || msgTarget == undefined){
		msgTarget = $(".error_" + name);
	}
	
	if (msgTarget.size() > index) {

		msgTarget.eq(index).text("* " + message);
		msgTarget.removeClass("error_hide");
		
	}
	
	target.parent().addClass("error");

}

function setNaviIndex(obj, event) {
	var len = obj.length;
	var idx = event;
	
	if (len == 2) {
		idx = event % 2;
	}
	
	return idx;
}

//YHCHOI : 배송지조회
function fnDeliverySearch(delino) {
	
	  if(GLOBAL_MOBILE_APP != ""){
		  
		  document.location.href="http://nexs.cjgls.com/web/info.jsp?slipno="+delino;
		  
	  }else{
		  
		  window.open("http://nexs.cjgls.com/web/info.jsp?slipno="+delino,"DELIVERY_INFO", "width=700, height=600, left="+(screen.availWidth/2-700/2)+", top="+(screen.availHeight/2-511/2)+", scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no");
		  
	  }
}

function addMobileNodata(beforeUrl) {
	var nodataHtml = [];
	
	nodataHtml.push("<div class=\"errorCont dataDelete\">");
	nodataHtml.push("	<div class=\"ttlbox\">");
	nodataHtml.push("		<p class=\"ttl\">죄송합니다. <br />요청하신 페이지를 <span>찾을 수 없습니다.</span></p>");
	nodataHtml.push("		<p class=\"txt\">웹페이지 주소가 바뀌었거나 잘못 입력 하신 경우입니다. 입력하신 페이지 주소가 정확한지 다시 한번 확인해 보시거나 <span class=\"line\">새로고침</span>을 해 보시기 바랍니다.</p>");
	nodataHtml.push("		<p class=\"txt\">계속 같은 문제가 반복적으로 발생 될 경우 <span class=\"line\">고객센터</span>로 문의해 주세요.</p>");
	nodataHtml.push("	</div>");
	nodataHtml.push("	<div class=\"btnArea\">");
	nodataHtml.push("		<span class=\"btn_ty3\"><a href=\""+beforeUrl+"\">이전페이지로 이동</a></span>");
	nodataHtml.push("		<span class=\"btn_ty\"><a href=\""+GLOBAL_WEB_URL+"mobile/main.do\">토니모리몰 홈</a></span>");
	nodataHtml.push("	</div>");
	nodataHtml.push("</div>");
	
	return nodataHtml.join("");
}

//YHCHOI : 1+1 구매 갯수
function onPlusCount(totalcnt, preCnt, nowCnt, plusBuyCnt, plusGiveCnt){

	var start  	  = preCnt + 1;
	var end	   	  = preCnt + nowCnt;
	var grpPrdCnt = plusBuyCnt + plusGiveCnt;
	var num		  = 0;
	
	var buyCnt = 0;
	var giveCnt = 0;
	var buyGapCnt = 0;
	var giveGapCnt = 0;
	
	for(var i= start; i<=end; i++){
	
		num = i % grpPrdCnt;
		
		if(num != 0 && num <= plusBuyCnt){
			buyCnt++;
		}else{
			giveCnt++;
		}
	}
	
	var buyGap = buyCnt % plusBuyCnt;
	
	var freeGap = parseInt(Math.floor(buyCnt/plusBuyCnt));
	
	if(giveCnt < freeGap * plusGiveCnt){
		
		giveGapCnt = freeGap * plusGiveCnt - giveCnt;
	}
	
	if(buyGap > 0){
		
		buyGapCnt = plusBuyCnt + plusGiveCnt - buyGap;
	}
	
	var list = {
			totalcnt : totalcnt
           ,preCnt : preCnt
           ,nowCnt : nowCnt
		   ,buyCnt : buyCnt
		   ,giveCnt : giveCnt
		   ,buyGapCnt : buyGapCnt
		   ,giveGapCnt : giveGapCnt
	};
	
	return list;
}

function onePlusCheck(totalCnt, plusBuyCnt, plusGiveCnt) {
	var groupPrdCnt = plusBuyCnt + plusGiveCnt;
	var buyCnt = 0;
	var giveCnt = 0;
	var num = 0;
	
	for(var i=1; i<=totalCnt; i++) {
		num = i % groupPrdCnt;
		
		if(num != 0 && num <= plusBuyCnt) {
			buyCnt++;
		} else {
			giveCnt++;
		}
	}
	
	var buyGap = buyCnt % plusBuyCnt;
	var freeGap = parseInt(Math.floor(buyCnt / plusBuyCnt));
	var giveGapCnt = 0;
	var buyGapCnt = 0;
	
	if(giveCnt < freeGap * plusGiveCnt) {
		giveGapCnt = freeGap * plusGiveCnt - giveCnt;
	}
	
	if(buyGap > 0) {
		buyGapCnt = plusBuyCnt + plusGiveCnt - buyGap;
	}
	
	var list = {
		buyCnt : buyCnt
		, giveCnt : giveCnt
		, buyGapCnt : buyGapCnt
		, giveGapCnt : giveGapCnt
	};
	
	return list;
}

function onePlusPriceResult(totalCnt, price, plusBuyCnt, plusGiveCnt, list) {
	var grpPrdCnt = plusBuyCnt + plusGiveCnt;
	var groupCnt = parseInt(Math.floor(totalCnt / grpPrdCnt));
	var unitPrice = parseInt(Math.floor(plusBuyCnt * price / grpPrdCnt / 100)) * 100;
	var lastPrice = (price * plusBuyCnt) - (unitPrice * (grpPrdCnt - 1));
	
	var restCnt = totalCnt - groupCnt * grpPrdCnt;
	var restBuyCnt = restCnt <= plusBuyCnt ? restCnt : plusBuyCnt;
	var restGiveCnt = restCnt - restBuyCnt;
	var restUnitPrice = restGiveCnt == 0 ? price : parseInt(Math.ceil(price * restBuyCnt) / (restBuyCnt + restGiveCnt) / 100) * 100;
	var restLastPrice = (price * restBuyCnt) - (restUnitPrice * (restBuyCnt + restGiveCnt - 1));

//	console.log("#######################################");
//	console.log("#" + plusBuyCnt+"+"+plusGiveCnt+"상품" + totalCnt + "개 구매");
//	console.log("grpPrdCnt::"+grpPrdCnt);
//	console.log("groupCnt::"+groupCnt);
//	console.log("unitPrice::"+unitPrice);
//	console.log("lastPrice::"+lastPrice);
//	console.log("restCnt::"+restCnt);
//	console.log("restBuyCnt::"+restBuyCnt);
	
	var groupList = [];
	for(var i = 0; i<list.length; i++) {
		var cnt = parseInt(list[i].cnt);
		var start = parseInt(list[i].preCnt) + 1;
		var end = start + cnt;
		var num = 0;
		
		var unitCnt = 0;
		var lastCnt = 0;
		var restUnitCnt = 0;
		var restLastCnt = 0;
		
		
		for(var j = start; j < end; j++){
			
			num = j % grpPrdCnt;
			
			if(j > totalCnt - restCnt){
				if (j < totalCnt ) restUnitCnt++;
				else restLastCnt++;
			} else {
				if (num == 0 ) lastCnt++;
				else unitCnt++;
			}
		}
		
		if(unitPrice == lastPrice) {
			if(unitCnt + lastCnt > 0) {
				groupList.push({price : unitPrice, index : list[i].index, cnt : (unitCnt + lastCnt)});
			}
		} else {
			if(unitCnt > 0) {
				groupList.push({price : unitPrice, index : list[i].index, cnt : unitCnt});
			}
			
			if(lastCnt > 0) {
				groupList.push({price : lastPrice, index : list[i].index, cnt : lastCnt});
			}
		}
		
		if(restUnitPrice == restLastPrice) {
			if(restUnitCnt + restLastCnt > 0) {
				groupList.push({price : restUnitPrice, index : list[i].index, cnt : (restUnitCnt + restLastCnt)});
			}
		} else {
			if(restUnitCnt > 0) {
				groupList.push({price : restUnitPrice, index : list[i].index, cnt : restUnitCnt});
			}
			
			if(restLastCnt > 0) {
				groupList.push({price : restLastPrice, index : list[i].index, cnt : restLastCnt});
			}
		}
	}
	
	return groupList;
}

//앱 다운로드 
function appDownloadProc(){
	var userAgent = navigator.userAgent.toLowerCase();
	var userAgentChk = ( userAgent.match(/(ipad|iphone|ipod)/g) ? "iOS" : "UNKNOWN" );
	
	if(userAgentChk == "UNKNOWN"){
		userAgentChk = ( userAgent.match('android') ? "Android" : "UNKNOWN" );
	}
	
	if(userAgentChk == "iOS"){
		//location.href = "https://itunes.apple.com/kr/app/id662044174?mt=8";
		location.href = "http://amorepacificmall.com/mobile/goApp.do";
	}else if(userAgentChk == "Android"){
		//window.open("market://details?id=com.amorepacific.amorepacificmall", "_blank");
		location.href = "http://amorepacificmall.com/mobile/goApp.do";
	}else{
		showMessageBox({
			message : "지원되지 않는 단말입니다."
		});
	}
}


//IE 여부 및 버전 체크
function fnIECheck() {
	var isIE = false;
	var version = null;
	var ua = navigator.userAgent;
	if ( ua.match(/MSIE/) || ua.match(/Trident/) ) {
		isIE = true;
		version = ua.match(/(MSIE\s|rv:)([\d\.]+)/)[2];
	}
	
	return {isIE : isIE, version : version};
}

//길이만큼 *로 변환
function getHidden(source,length){
	
	var sReturn = "";
	
	if(source != null && source != ""){

		var slength = source.length;
		
		for(var i=0; i<slength; i++){
			
			sReturn += "*";
			
		}
		
	}
	return sReturn;
}

//텍스트를 *로 변환
function getStringHidden(source,length){
	
	var sReturn = "";
	
	if(source != null && source != ""){

		var slength = source.length;
		
		for(var i=0; i<slength; i++){
			
			if(i <length){
				sReturn += source.charAt(i);
			}else{
				sReturn += "*";
			}
			
		}
		
	}
	return sReturn;
}

//이메일 *로 변환
function getEmailHidden(email, length){
	
	var sReturn = "";
	
	if(email != null & email !=""){
		
		if(email.indexOf("@") > -1){
			
			var emailFst = email.substring(0,email.indexOf("@"));
			var emailLst = email.substring(email.indexOf("@") , email.length);
			
			sReturn = getStringHidden(emailFst,length) + emailLst;
			
		}else{
			sReturn = getStringHidden(email,length);
		}

	}
	
	return sReturn;
}

//연락처 변환 및 마킹처리
function getMobileHidden(phone){
	
	var sReturn = "";
	
	if(phone != null && phone !=""){
		
		var phoneFst = phone.substring(0,phone.indexOf("-"));
		var phoneMst = phone.substring(phone.indexOf("-")+1,phone.lastIndexOf("-"));
		var phoneLst = phone.substring(phone.lastIndexOf("-")+1,phone.length);
		
		if(phoneMst.length > 3){
			
			phoneMst = "****";
			
		}else{
			
			phoneMst = "***";
		}
		
		sReturn = phoneFst+"-"+phoneMst+"-"+phoneLst;

	}
	
	return sReturn;
}

/**
 * 날짜포맷변경
 * 
 * formatType 1 : dd.MM.yyyy
 * formatType 2 : dd.MM.yyyy HH:mm:ss
 * 
 * @param strDate
 * @param formatType
 * @returns
 */
function formatDate(strDate, formatType) {
	var dateObj	= new Date(strDate);
	var year	= dateObj.getFullYear();
	var month	= dateObj.getMonth();
	var date	= dateObj.getDate();
	var hr		= dateObj.getHours();
	var min		= dateObj.getMinutes();
	var sc		= dateObj.getSeconds();
	
	month		= month +1;
	
	if (month.toString().length == 1) {
		month = "0" + month;
	}
	if (date.toString().length == 1) {
		date = "0" + date;
	}
	if (hr.toString().length == 1) {
		hr = "0" + hr;
	}
	if (min.toString().length == 1) {
		min = "0" + min;
	}
	
	if (formatType == 1) {			//dd.MM.yyyy
		return date + "." + month + "." + year;
	}
	else if (formatType == 2) {		//dd.MM.yyyy HH:mm:ss
		return date + "." + month + "." + year + " " + hr + ":" + min + ":" + sc;
	}
}

/**
 * 저장 전 날짜포맷변경
 * dd.MM.yyyy → yyyy.MM.dd
 * 
 * @param strDate
 * @returns
 */
function changeFormatDate(strDate) {
	var newStrDate = "";
	var arrStrDate = strDate.split(".");
	
	newStrDate = arrStrDate[2] + arrStrDate[1] + arrStrDate[0]; 
	
	return newStrDate;
}

/**
 * html에서 첫번째 이미지 경로 뽑아오기
 * @param Html
 * @returns
 */
function getFirstImgFromHtml(Html){
	var returnStr = "/images/common/non-userPhoto.jpg";
	var imgAllNm = "";
	if(Html){
		var pattern = /([^= (\"|')]*\.(gif|jpg|bmp|GIF|JPG|BMP|png|PNG))/;
		var imgAllNm = Html.match(pattern);
		if(pattern.test(Html)){			
			if(imgAllNm){
				returnStr = imgAllNm[0];
			}
		}
		
	}
	return returnStr;
}

/** 2021-09-14
 * url 복사 [브라우저 대응]
 * @params
 */
function copyUrlText() {
	console.log("url : "+$(location).attr('href'));
	var url = $(location).attr('href');

    //숨겨진 input박스 value값으로 text 변수 넣어줌.
    $('#clip_target').val(url); //input박스 value를 선택
	$('#clip_target').select(); // Use try & catch for unsupported browser
	try { // The important part (copy selected text)
		 var successful = document.execCommand('copy');
		} catch (err) { alert('이 브라우저는 지원하지 않습니다.')
	}
	alert("url이 복사 되었습니다.");
}

function gfnUrlEncoding(url){
	return encodeURIComponent(url).replace(/'/g,"%27").replace(/"/g,"%22");
}

function gfnUrlDecoding(url){
	return decodeURIComponent(url.replace(/\+/g,  " "));
}

function gfnDefaultIfEmpty(val, defaultStr){
	return isEmpty(val) ? defaultStr : val;
}

function gfnDefaultIfNan(num, defaultNum){
	return parseInt(num) || defaultNum;
}

//포맷에 맞는 날짜 return
//yyyy.MM.dd HH:mm:ss
function gfnStrDateToFormatDate(strDate, format) {
	try{

		if(isEmpty(strDate)){
			return '';
		}

		let finalDateStr = strDate.replace(/-/g, "/");
		finalDateStr = (finalDateStr.length > 19 ? finalDateStr.substring(0, 19) : finalDateStr)
		const date = new Date(finalDateStr);

		const map = {
			MM: lpad(date.getMonth() + 1, 2, '0'),
			dd: lpad(date.getDate(), 2, '0'),
			yy: date.getFullYear().toString().slice(-2),
			yyyy: date.getFullYear().toString(),
			HH: date.getHours(),
			mm: date.getMinutes(),
			ss: date.getSeconds(),
		}
		return format.replace(/MM|dd|yyyy|yy|HH|mm|ss/gi, function(matched) {return map[matched]});
	} catch (e){
		console.error(e);
		return '';
	}
}

// 배열에 중복내용 제거 후 return
function getUnique(arr){
	for (var i=0; i<arr.length; i++){
		for (var j=i+1; j<arr.length; j++){
			if (arr[i] == arr[j]){
				arr.splice(j,1);
				j--;
			}
		}
	}
	return arr;
}

/**
 * Project : foodnamoo-ec-shop.ranking_shop
 * Company : TGCS
 * User: yong
 * Date: 2021-07-25
 * Descript :
 */

/***************************************************************
 * prototype
 ***************************************************************/
/**
 * IE EC6
 * findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다.
 * 만족하는 요소가 없으면 -1을 반환합니다.
 */
if (!Array.prototype.findIndex) {
	Object.defineProperty(Array.prototype, 'findIndex', {
		value: function (predicate) {
			'use strict';
			if (this == null) {
				throw new TypeError('Array.prototype.findIndex called on null or undefined');
			}
			if (typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}
			let list = Object(this),
				length = list.length >>> 0,
				thisArg = arguments[1],
				value;

			for (var i = 0; i < length; i++) {
				value = list[i];
				if (predicate.call(thisArg, value, i, list)) {
					return i;
				}
			}
			return -1;
		},
		enumerable: false,
		configurable: false,
		writable: false
	});
}
/**
 * 문자열 format 지정
 * @param type
 *  - tel : 전화번호에 하이픈을 추가한 전화번호 형식으로 반환
 * ex_ console.log("01012345678".format('tel'))
 * @returns {String|string}
 */
String.prototype.formatter = function() {
	// return [...arguments].reduce((pattern, value) => pattern.replace(/%s/,value), this);
	let formatted = this;
	for (let arg in arguments) {
		formatted = formatted.replace("{" + arg + "}", arguments[arg]);
	}
	return formatted;
};
String.prototype.format = function (type) {
	let str = this;
	if (type === 'tel') {
		return str.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
	}
	return str;
}
/**
 * 좌측문자열채우기
 * @params
 *  - padLen : 최대 채우고자 하는 길이
 *  - padStr : 채우고자하는 문자(char)
 * ex_ console.log("05".lpad(5, "00")); // 00000
 * ex_ console.log("05".lpad(5, "01")); // 01010
 */
String.prototype.lpad = function (padLen, padStr) {
	let str = this;
	if (padStr.length > padLen) {
		console.error('오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다');
		return str + '';
	}
	while (str.length < padLen)
		str = padStr + str;
	str = str.length >= padLen ? str.substring(0, padLen) : str;
	return str;
};

/**
 * 우측문자열채우기
 * @params
 *  - padLen : 최대 채우고자 하는 길이
 *  - padStr : 채우고자하는 문자(char)
 *  ex_ console.log("05".rpad(5, "AB")); // 05ABA
 */
String.prototype.rpad = function (padLen, padStr) {
	let str = this;
	if (padStr.length > padLen) {
		console.error('오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다');
		return str + '';
	}
	while (str.length < padLen)
		str += padStr;
	str = str.length >= padLen ? str.substring(0, padLen) : str;
	return str;
};


/**
 * 각 문자의 코드를 확인하여 문자의 바이트 크기를 취득하여 합산 (2021.09.06)
 * @param text
 * @returns {number}
 */
function getByteLength(text) {
	let byteLength = 0;
	let charByte = 0;

	for (let i = 0; i < text.length; i++) {
		charByte = text.charCodeAt(i);
		byteLength += (charByte >> 11) ? 3 : ((charByte >> 7) ? 2 : 1);
	}

	return byteLength;
}

/**
 * 좌측문자열채우기
 * @params
 *  - str : 원 문자열
 *  - padLen : 최대 채우고자 하는 길이
 *  - padStr : 채우고자하는 문자(char)
 * ex_ console.log(lpad("01", 5, "0")); // 00001
 * ex_ console.log(lpad("01", 5, "01")); // 01010
 */
function lpad(str, padLen, padStr) {
	if (padStr.length > padLen) {
		console.error("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
		return str;
	}
	str += '';
	padStr += '';
	while (str.length < padLen) {
		str = padStr + str;
	}
	str = str.length >= padLen ? str.substring(0, padLen) : str;
	return str;
}


/**
 * 이모지 입력 제한
 * input tag 이모지 입력 시
 * @param e
 */
function removeEmojis (e) {
	let that = $(this),
		data = that.val().trim(),
		result = '';
	if(data.length > 0) {
		const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
		if(regex.test(data)) {
			result = data.replace(regex,'');
			that.val(result);
		}
	}
}


/**
 * 우측문자열채우기
 * @params
 *  - str : 원 문자열
 *  - padLen : 최대 채우고자 하는 길이
 *  - padStr : 채우고자하는 문자(char)
 * ex_ console.log(rpad("01", 5, "AB")); // 01ABA
 * ex_ console.log(rpad("01", 5, "ABCDEF")); // 01 : 채우고자 하는 문자열이 요청 길이보다 큽니다
 */
function rpad(str, padLen, padStr) {
	if (padStr.length > padLen) {
		console.error("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
		return str + "";
	}
	str += '';
	padStr += '';
	while (str.length < padLen) {
		str += padStr;
	}
	str = str.length >= padLen ? str.substring(0, padLen) : str;
	return str;
}
/**
 * 서버 시간 가져오기
 */
function getServerDtm() {
	let xmlHttpRequest;
	// code for Firefox, Mozilla, IE7, etc.
	if (window.XMLHttpRequest) {
		xmlHttpRequest = new XMLHttpRequest();
	}
	// code for IE5, IE6
	else if (window.ActiveXObject) {
		xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else {
		return;
	}
	xmlHttpRequest.open('HEAD', window.location.href.toString(), false);
	xmlHttpRequest.setRequestHeader("ContentType", "text/html");
	xmlHttpRequest.send('');
	let serverDate = xmlHttpRequest.getResponseHeader("Date"),
		date = new Date(serverDate);
	return date;
}

(function ($) {
	$('a[href="#"]').click(function(e) { e.preventDefault(); });

	$('input[type="number"]').on('keypress', function (e) {
		if (e.keyCode < 48 || e.keyCode > 57) {
			e.preventDefault();
		}
	});

	let controlsWrapper;
	controlsWrapper = {
		// 싱글 선택박스
		_getSelectOneValue: function (select) {
			return select.val();
		},
		// 멀티 선택박스
		_getSelectMultipleValue: function (select) {
			let values = [];
			$.each(select[0].options, function (i, option) {
				let $option = $(option);

				if ($option.is(':selected')) {
					values.push($option.val());
				}
			});

			return values;
		},
		getSelectValue: function (select) {
			let type, value;

			type = select[0].type;

			if (type === 'select-one') {
				value = this._getSelectOneValue(select);
			} else {
				value = this._getSelectMultipleValue(select);
			}

			return value;
		},
		getCheckboxValue: function (checkbox) {
			if (!checkbox.is(':checked')) {
				return '';
			}

			return checkbox.val();
		},
		getValues: function (container, keyFilter) {
			let formObject = {};

			container.find('input, select, textarea').each(function (i, node) {
				let key, disabled, type, value, $node;

				$node = $(node);

				key = $node.attr($.fn.inputValues.opts.attr);
				disabled = $node.is(':disabled');

				// disabled 항목 또는 일치하지 않는 항목은 skip
				if (!key || (!$.fn.inputValues.opts.includeDisabled && disabled) || (keyFilter && (key !== keyFilter))) {
					return;
				}

				switch (node.type) {
					case 'radio':
						if (!$node.is(':checked')) {
							formObject[key] = formObject[key] || '';
							break;
						}

						formObject[key] = $node.val();
						break;
					case 'checkbox':
						if (!$node.is(':checked')) {
							formObject[key] = formObject[key] || '';
							break;
						}

						if (!formObject.hasOwnProperty(key) || !formObject[key]) {
							formObject[key] = $node.val();
							break;
						}

						if (!$.isArray(formObject[key])) {
							value = [formObject[key]];
							formObject[key] = value;
						}

						formObject[key].push($node.val());
						break;
					case 'select-one':
						formObject[key] = $node.val();
						break;
					case 'select-multiple':
						formObject[key] = [];
						$.each(node.options, function (i, option) {
							let $option = $(option);
							if ($option.is(':selected')) {
								formObject[key].push($option.val());
							}
						});
						break;
					case 'button':
					case 'reset':
					case 'image':
					case undefined:
						break;
					default:
						formObject[key] = $node.val();
				}
			});

			if (keyFilter) {
				return formObject[keyFilter];
			}

			return formObject;
		},
		setSelectValue: function (select, value) {
			let i, size, option;

			select.val(null);

			if (!$.isArray(value)) {
				select.val(value);
				return;
			}

			for (i = 0, size = value.length; i < size; i += 1) {
				option = select.find('option[value="' + value[i] + '"]');
				option.prop('selected', true);
			}
		},
		// 라디오버튼 또는 체크박스
		_checkCheckableValue: function (checkable, value) {
			if (!$.isArray(value)) {
				value = [value];
			}

			$.each(value, function (i) {
				value[i] = '' + value[i];
			});

			if ($.inArray(checkable.val(), value) > -1) {
				checkable.prop('checked', true);
				return true;
			}
			return false;
		},
		checkCheckboxesValue: function (checkbox, value) {
			let i, size, anyWasChecked = false;

			checkbox.prop('checked', false);

			for (i = 0, size = checkbox.length; i < size; i += 1) {
				if (this._checkCheckableValue(checkbox.eq(i), value)) {
					anyWasChecked = true;
				}
			}

			return anyWasChecked;
		},
		checkRadiosValue: function (radios, value) {
			let i, size;

			radios.prop('checked', false);

			for (i = 0, size = radios.length; i < size; i += 1) {
				if (this._checkCheckableValue(radios.eq(i), ('' + value))) {
					return true;
				}
			}
			return false;
		},
		setValues: function (container, values) {
			let key, nodes, filter, type,
				attr = $.fn.inputValues.opts.attr;

			for (key in values) {
				if (!values.hasOwnProperty(key)) continue;

				filter = '[' + attr + '="' + key + '"]';
				nodes = container.find(filter);

				if (nodes.length === 0) {
					continue;
				}

				type = nodes[0].type;

				switch (type) {
					case 'select-one':
					case 'select-multiple':
						this.setSelectValue(nodes, values[key]);
						break;
					case 'radio':
						this.checkRadiosValue(nodes, values[key]);
						break;
					case 'checkbox':
						this.checkCheckboxesValue(nodes, values[key]);
						break;
					case 'file':
						// 파일의 경우는 빈 문자열로만 설정
						if (values[key] !== '') continue;
						nodes.val('');
						break;
					case 'button':
					case 'image':
					case 'reset':
					case undefined:
						break;
					default:
						nodes.val(values[key]);
				}
			}
		}
	};

	$.fn.inputValues = function (paramA, paramB) {
		let values;
		// 모든 form element 요소의 값 가져오기
		if (!paramA) return controlsWrapper.getValues(this);
		if (typeof paramA === 'string') {
			// 특정 이름의 값만 가져오기
			if (paramB === undefined) return controlsWrapper.getValues(this, paramA);
			values = {};
			values[paramA] = paramB;
		} else {
			values = paramA;
		}
		controlsWrapper.setValues(this, values);
		return this;
	};

	$.fn.inputValues.opts = {
		attr: 'name',
		includeDisabled: false
	};

	$.fn.inputValues.config = function (opts) {
		$.fn.inputValues.opts = $.extend($.fn.inputValues.opts, opts);
		return this;
	};
	$.fn.serializeObject = function () {
		let result = {};
		let extend = function (i, element) {
			let node = result[element.name];
			if ("undefined" !== typeof node && node !== null) {
				if ($.isArray(node)) {
					node.push(element.value);
				} else {
					result[element.name] = [node, element.value];
				}
			} else {
				result[element.name] = element.value;
			}
		}
		$.each(this.serializeArray(), extend);
		return result;
	};
	$.fn.cmAjax = function (opt, params) {
		let frm = this,
			obj = {
				url: frm.attr('action'),
				type: frm.attr('method'),
				dataType: 'json',
				data: $.extend(frm.serializeObject(), params),
				success: function (data) {
					if (!isEmpty(frm.data('succ')) && typeof window[frm.data('succ')] === 'function') {
						window[frm.data('succ')](data);
					}
				},
				error: function () {
					if (!isEmpty(frm.data('fail')) && typeof window[frm.data('fail')] === 'function') {
						obj.error = window[frm.data('fail')]();
					}
				}
			};
		cmAjax($.extend(obj, opt));
	};
	// $.validator.setDefaults({
	// 	onkeyup: false, /* 키보드에 의한 검사 해제 */
	// 	onclick: false, /* 체크박스나 라디오 버튼 클릭시마다 검사 해제 */
	// 	onfocusout: false, /* 포커스가 빠져나올 경우의 검사 해제 */
	// 	showErrors: function (errorMap, errorList) {
	// 		if (this.numberOfInvalids()) {
	// 			alert(errorList[0].message);
	// 		}
	// 	}
	// });
	// $.validator.addMethod("dateRange", function (value, element, from, to) {
	// 	try {
	// 		let date = new Date(value);
	// 		if (date >= from && date <= to)
	// 			return true;
	// 	} catch (e) {}
	// 	return false;
	// });
	// $.validator.addMethod('from', function (value, element, params) {
	// 	// if end date is valid, validate it as well
	// 	let end = $(params);
	// 	if (!end.data('validation.running')) {
	// 		$(element).data('validation.running', true);
	// 		setTimeout($.proxy(
	// 			function () {
	// 				this.element(end);
	// 			}, this), 0);
	// 		// Ensure clearing the 'flag' happens after the validation of 'end' to prevent endless looping
	// 		setTimeout(function () {
	// 			$(element).data('validation.running', false);
	// 		}, 0);
	// 	}
	// 	return this.optional(element) || this.optional(end[0]) || new Date(value) < new Date(end.val());
	// }, '해당 종료 날짜 이전이어야 합니다.');
	// $.validator.addMethod('to', function (value, element, params) {
	// 	// if start date is valid, validate it as well
	// 	let start = $(params);
	// 	if (!start.data('validation.running')) {
	// 		$(element).data('validation.running', true);
	// 		setTimeout($.proxy(
	// 			function () {
	// 				this.element(start);
	// 			}, this), 0);
	// 		setTimeout(function () {
	// 			$(element).data('validation.running', false);
	// 		}, 0);
	// 	}
	// 	return this.optional(element) || this.optional(start[0]) || new Date(value) > new Date($(params).val());
	// }, '해당 시작 날짜 이후여야 합니다.');
	// $.validator.addMethod('onlyEng', function (value, element) {
	// 	return this.optional(element) || value.match(/^[a-zA-Z0-9\.\,\s]+( [a-zA-Z0-9\.\,\s]+)*$/);
	// }, '영문자만 입력 해주세요.');
	// $.validator.addMethod('onlyKor', function (value, element) {
	// 	return this.optional(element) || value.match(/^[가-힣]+$/);
	// }, '한글만 입력 해주세요.');
	// $.validator.addMethod('phone', function (value, element) {
	// 	value = value.replace(/\s+/g, '');
	// 	return this.optional(element) || value.match(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);
	// }, '잘못된 휴대폰 번호입니다. 숫자, 하이픈(–) 를 포함한 숫자만 입력하세요.');
	// $.validator.addMethod('cellPhone', function (value, element) {
	// 	value = value.replace(/\s+/g, '');
	// 	// return this.optional(element) || value.match(/^\d{3}\d{3,4}\d{4}$/);
	// 	return this.optional(element) || value.match(/^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/);
	// }, '유효하지 않은 휴대폰 번호입니다.');
	// $.validator.addMethod('email', function (value, element) {
	// 	value = value.replace(/\s+/g, '');
	// 	return this.optional(element) || value.match(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
	// }, '잘못된 이메일 주소입니다.');
	// $.validator.addMethod('onlyChar', function (value, element) {
	// 	return this.optional(element) || value.match(/[^~!@\#$%^&*\()\-=+_'\;<>0-9\/.\`:\"\\,\[\]?|{}]$/); ///[^a-z|A-Z|가-힣]/
	// }, '특수문자 및 숫자는 입력할 수 없습니다.');
	// $.validator.addMethod('byte', function (value, element, params) {
	// 	let byte = 0, result = true;
	// 	for (let i = 0, len = value.length; i < len; i++) {
	// 		(escape(value.charAt(i)).length > 4) ? byte += 2 : byte ++;
	// 	}
	// 	if (byte > params) {
	// 		result = false;
	// 	}
	// 	return this.optional(element) || result;
	// }, '최대 Byte 값을 넘었습니다.');
	// $(document)
	// 	.on('keyup', ':input[onlyChar]', function (e) {
	// 		// 문자만 입력
	// 		let that = $(this),
	// 			data = that.val().trim(),
	// 			result = '';
	// 		if(data.length > 0) {
	// 			let replaceChar = /[~!@\#$%^&*\()\-=+_'\;<>0-9\/.\`:\"\\,\[\]?|{}]/gi;
	// 			result = data.replace(replaceChar, '');
	// 			that.val(result);
	// 		}
	// 	})
	// 	.on('keyup', ':input[digits]', function (e) {
	// 		// 숫자만 입력 (input type = "text" 인 경우)
	// 		let that = $(this),
	// 			data = that.val().trim(),
	// 			result = '';
	// 		if(data.length > 0) {
	// 			let replaceNotInt = /[^0-9]/gi;
	// 			result = data.replace(replaceNotInt, '');
	// 			that.val(result);
	// 		}
	// 	})
	// ;
}(jQuery));

let debounceTimer;
function gfnApplyProductFilter(ms) {
	if (debounceTimer) {
		clearTimeout(debounceTimer);
	}
	debounceTimer = setTimeout(function() {
		let fn = 'fnApplyPrdFilter';
		if (!isEmptyExt(window[fn]) && typeof window[fn] === 'function') {
			window[fn]('load');
		}
	}, ms);
}

function gfnSuccessCallback() {
	console.log('글로벌 정상 콜백!!');
}

function gfnErrorCallback() {
	console.log('글로벌 실패 콜백!!');
}

/**
 * load된 데이터의 상품 총 갯수를 다시 설정
 * @param cnt
 */
function gfnSetTotalCount(cnt) {
	let totalCount = cnt || 0;
	$('.sorting-head span.text-primary').text('총 ' + totalCount + '개');
}

/**
 * 기존 isEmpty는 Object를 판별 할 수 없어 확장형으로 재정의
 * @param value
 * @returns {boolean}
 */
const isEmptyExt = function (value) {
	if (value === null) return true;
	if (typeof value === 'undefined') return true;
	if (typeof value === 'string' && value === '') return true;
	if (Array.isArray(value) && value.length < 1) return true;
	if (typeof value === 'object' && value.constructor.name === 'Object' && Object.keys(value).length < 1 && Object.getOwnPropertyNames(value) < 1) return true;
	if (typeof value === 'object' && value.constructor.name === 'String' && Object.keys(value).length < 1) return true; // new String()
	return false;
}
/***************************************************************
 * Event binding
 ***************************************************************/
const ExtSelector = {
	MODAL_OPEN: ['button.btn-ext-modal', 'a.btn-ext-modal', 'button.btn-ext-xlsdn'].join(','),
	MODAL_CLOSE: 'button.ext-close-pop',
	MODAL_SRCH: 'button.btn-modal-search',
	MODAL_ENTR_SRCH: '.modal-popup input.ext-input-enter',
	MODAL_PAGING: '.modal-popup .pagination a',
	MODAL_CNF_RTN: 'button.ext-return-pop',
	MODAL_RSN_RTN: 'button.ext-reason-pop',
	MODAL_SEL_RTN: 'a.elps-link',
	CHECK_ALL: 'input[type=checkbox].checkbox.ext-check-all',
	CHECK_ITEM: 'input[type=checkbox].checkbox.ext-check-item',
	COMBO_RLTNL: 'select.ext-select',
	BTN_XLS_DN: 'button.ext-xlsdn',
	LNK_ADD_TAB: '.ext-add-tab'
};
$(document)
	// .on('click', ExtSelector.BTN_XLS_DN, gfnExcelDownload)
	.on('click', ExtSelector.CHECK_ALL, gfnCheckAll)
	.on('click', ExtSelector.CHECK_ITEM, gfnCheckItem)
	.on('click', ExtSelector.MODAL_OPEN, gfnOpenModal)
	.on('click', ExtSelector.MODAL_SRCH, gfnSearchModal)
	.on('click', ExtSelector.MODAL_CLOSE, gfnCloseModal)
	.on('click', ExtSelector.MODAL_CNF_RTN, gfnReturnModal)
	.on('click', ExtSelector.MODAL_RSN_RTN, gfnReasonModal)
	.on('click', ExtSelector.MODAL_SEL_RTN, gfnSelectReturnModal)
	.on('click', ExtSelector.MODAL_PAGING, gfnSearchModalPaging)
	.on('keypress', ExtSelector.MODAL_ENTR_SRCH, gfnKeypressSearchModal)
	.on('change', ExtSelector.COMBO_RLTNL, gfnSelectChangEvent)
	.on('click', ExtSelector.LNK_ADD_TAB, gfnAddTab)
	.ready(function (e) {
		$('.ext-component').each(gfnCreateComponent);
	});

/***************************************************************
 * Ajax call
 ***************************************************************/
function gfnAddTab(e) {
	if (isEmptyExt($(this).data())) {
		console.error('DATASET 설정을 해주세요.');
		return;
	}
	let data = $(this).data();
	if (isEmptyExt(data.menuId)) {
		console.error('메뉴아이디를 설정해 주세요.');
		return;
	}
	if (isEmptyExt(data.menuNm)) {
		console.error('메뉴명을 설정해 주세요.');
		return;
	}
	if (isEmptyExt(data.url)) {
		console.error('URL을 설정해 주세요.');
		return;
	}
	let queryString = '',
		param = $.extend({}, data, data.param);
	delete param.menuId;
	delete param.menuNm;
	delete param.url;
	delete param.param;
	if (!isEmptyExt(param)) {
		queryString = '?'.concat($.param(param));
	}
	addTab(data.menuId, data.menuNm, data.url + queryString);
}

/***************************************************************
 * Common Select Component
 ***************************************************************/
function gfnCreateComponent(index, elem, flag) {
	let $_elem = $(elem),
		data = $_elem.data();
	if ($.isEmptyObject(data)) {
		console.error('속성(dataset)를 설정해주세요.');
		return false;
	}
	if (isEmpty(data.option)) {
		console.error('설정 옵션(option)를 지정해주세요.');
		return false;
	}
	if (elem.getAttribute('id') === data.target) {
		console.error('설정 타겟(target)를 재확인해주세요.');
		return false;
	}
	if ($_elem.prop('tagName') === 'SELECT') {
		gfnCreateSelectOptions(elem, data);
	}
}

function gfnCreateSelectOptions(elem, data) {
	let optionElement = document.createElement('option'),
		optionText = document.createTextNode(data.nullText || '전체'),
		$_element = {select: $(elem), option: $(optionElement)};
	// setting
	$_element.option.val('');
	if (!$_element.select.hasClass('select')) {
		$_element.select.addClass('select');
	}
	if (!$_element.select.hasClass('ext-select')) {
		$_element.select.addClass('ext-select');
	}
	$_element.select.addClass(data.cls || '');
	if (!isEmpty(data.target)) {
		let $_next = $('#'.concat($_element.select.data('target')));
		$_next.data('prev', $_element.select.attr('id'));
	}
	// draw
	optionElement.appendChild(optionText);
	elem.appendChild(optionElement);
	// data load
	if (data.load) {
		gfnAjaxData(elem, data);
	} else {
		if (!isEmpty(data.callback) && typeof window[data.callback] === 'function') {
			window[data.callback]();
		}
	}
}

function gfnAjaxData(elem, data) {
	// console.log(data);
	let prev = $('#'.concat(data.prev)),
		params = {
			categorycd: prev.val(),
			depth: data.depth,
			sitecd: data.sitecd
		};
	cmAjax({
		url: '/common/module/dpcategory',
		type: 'POST',
		dataType: 'json',
		data: params,
		scope: {
			target: elem,
			params: params,
			callback: data.callback
		},
		success: gfnAjaxDataSucc
	});
}

function gfnAjaxDataSucc(data) {
	if (data.status === 'succ') {
		let records = data.object,
			params = this.scope.params,
			selectElement = this.scope.target,
			$_element = {select: $(selectElement)};
		$_element.select.find('option[value!=""]').remove();
		$_element.select.val('').trigger('change');
		if (records.length > 0) {
			records.forEach(function (item, index, arry) {
				let optionElement = document.createElement('option');
				$_element.option = $(optionElement);
				$_element.option.val(item.code).text(item.name);
				selectElement.appendChild(optionElement);
			});
		}
		if (!isEmpty(this.scope.callback) && typeof window[this.scope.callback] === 'function') {
			window[this.scope.callback]($_element.select);
		}
	}
}

function gfnSelectChangEvent(e) {
	// console.log(this);
	let target = $(this).data('target'),
		elem = document.getElementById(target);
	gfnAjaxData(elem, $.extend({
		categorycd: this.value
	}, $(elem).data()));
}

/***************************************************************
 * Common Input Component
 * checkbox 전체 선택 or 해제 / 개별선택시 전체 선택 or 해제 기능
 ***************************************************************/
function gfnCheckAll(e) {
	let selector = 'input:checkbox[name=' + this.name + ']:not(:disabled)';
	$(selector).prop('checked', ($(this).is(':checked')) ? true : false);
	let callback = $(this).data('callback'); // dataset에 지정된 callback 함수 호출
	if (!isEmpty(callback)) {
		window[callback]();
	}
}

function gfnCheckItem(e) {
	let isChecked = true,
		selector = 'input:checkbox[name=' + this.name + '].checkbox.ext-check-all';
	$('input:checkbox[name=' + this.name + '].checkbox.ext-check-item').each(function () {
		isChecked = isChecked && $(this).is(':checked');
	});
	$(selector).prop('checked', isChecked);
	// dataset에 지정된 callback 함수 호출
	let callback = $(this).data('callback');
	if (!isEmpty(callback)) {
		window[callback]();
	}
}

/***************************************************************
 * Common Button Component(Popup)
 ***************************************************************/
function gfnExcelDownload(e) {
	console.log(this);
}

function gfnOpenModal(e) {
	// console.log(this);
	let res = false,
		elem = $(this),    /* click button */
		data = elem.data();
	if ($.isEmptyObject(data) || isEmpty(data.modal)) {
		console.error('팝업(modal)를 지정해주세요.');
		return;
	}
	if (isEmpty(data.callback)) {
		console.error('결과(callback)를 지정해주세요.');
		return;
	}
	if (!isEmpty(data.before)) {
		if (typeof window[data.before] !== 'function') {
			console.error('선행 함수가 없습니다.');
			return;
		}
		if (!window[data.before]()) {
			return;
		}
	}
	let param = data.param || {};
	let params = $.extend(data, param, {
			modal: data.modal.toLowerCase(),
			type: data.type || 'single',
			cls: data.cls || 'md',
			pageSize: 10
		}),
		isModal = $('#modal-' + params.modal);
	if (data.modal.toLowerCase() === 'admin') {
		params.dept = data.dept || '';
	}
	// 버튼 중복클릭 방지
	if (isModal.length > 0) {
		isModal.show();
		return;
	}
	// console.log('params', params); // modal popup data
	let url = '/common/modal',
		$_dom = $(document.createElement('div'));
	$_dom.attr('class', 'modal-popup');
	$_dom.data('btn', elem);
	$_dom.data(params).load(url, $.param(params), function () {
		let elem = $(this);
		$('.layer-popup-wrap').append(elem);    // load된 내용 호출
		elem.find('.layer-wrap').show();        // 팝업 보이기
	});
}

function gfnKeypressSearchModal(e) {
	if (e.type === 'keypress' && e.which === 13) {
		e.preventDefault();
		$(this).closest('form').find('button.btn-modal-search').trigger('click');
	}
}

function gfnSearchModal(e) {
	if (e.type === 'click') {
		let elem = $(this),
			modal = elem.closest('.modal-popup'),
			data = modal.data(),
			form = elem.closest('#frm-search-' + data.modal),
			dom = modal.find('.layer-content'),
			url = '/common/modal #modal-content-' + data.modal,
			params = $.extend({}, data);
		delete params.btn; // element object 를 request parameter로 넘기지 않기 위함.
		dom.data(data).load(url, $.param($.extend({}, form.serializeObject(), params)), function (e) {
			// TODO
			if (data.modal === 'product' && !isEmpty($('select#ext-comp-ctgr1').data('reqval'))) {
				$('select#ext-comp-ctgr1').trigger('change');
			}
		});
	}
}

function gfnSearchModalPaging(e) {
	let elem = $(this),
		modal = elem.closest('.modal-popup'),
		data = modal.data(),
		dom = modal.find('.layer-content'),
		url = '/common/modal #modal-content-' + data.modal;
	data.nowPageNo = $(this).data('page');
	dom.data(data).load(url, $.param(data), function (e) {
		// TODO
	});
}

function gfnSelectReturnModal(e) {
	// console.log(this);
	let elem = $(this),
		selected = elem.closest('tr').find('.ext-check-item');
	selected.attr('checked', 'checked');
	elem.closest('.layer-body').find('.ext-return-pop').trigger('click');
}

function gfnReasonModal(e) {
	let elem = $(this),
		modal = elem.closest('.modal-popup'),
		data = modal.data(),
		textareaElement = elem.closest('.layer-body').find('textarea[name=reason]'),
		reason = textareaElement.val();
	if (isEmpty(textareaElement.val())) {
		alert('엑셀 다운로드 사유를 입력해주세요.');
		textareaElement.focus();
		return;
	}
	window[data.callback](reason);
	elem.closest('.layer-bottom').find('button.ext-close-pop').trigger('click');
}

function gfnReturnModal(e) {
	let elem = $(this),
		returnValues = [],
		selector = ['.board-list input.ext-check-item:checked',
			'.board-list input[name=radio-item]:checked'],
		selected = elem.closest('.layer-body').find(selector.join(',')),
		callback = elem.closest('.modal-popup').data('callback'),
		$_divElement = elem.closest('.modal-popup').data('btn').closest('div.input-group');
	selected.each(function (index, item, array) {
		let me = $(item);
		if (me.is(':checked') && me.attr('id') !== 'check-all') {
			returnValues.push($(item).data());
		}
	});
	// 선택된 항목 params.target 세팅
	// console.log($_divElement);
	if (returnValues.length > 0) {
		$_divElement.find('.input-text').val(returnValues[0].name);
		$_divElement.find('input[type=hidden]').val(returnValues[0].code);
	}
	if (!isEmpty(callback)) {
		window[callback](returnValues);
	}
	elem.closest('.layer-bottom').find('button.ext-close-pop').trigger('click');
}

function gfnCloseModal(e) {
	let elem = $(this);
	elem.closest('.layer-wrap').hide();         // 팝업 숨기기
	elem.closest('.modal-popup').remove();      // 숨겨진 팝업 삭제
}

/**
 * app 전용 호출 함수
 */
function pageReChk() {

	//로그인/로그아웃 변경
	try {
		gfnSetMoblieLoginHtml();
	} catch (e) {}

	// 최근본상품
	if ( !isEmpty(getCookie('_click_prod')) ) {
		$('.recent-bottom li .num').text(getCookie('_click_prod').split(',').length);
	}

	// 장바구니
	cmAjax({
		url       : "/main/getUserCartCnt"
		, type      : "post"
		, dataType  : "json"
		, async     : false
		, success   : function ( data ) {
			const $count = $(".btn-util-cart .count, .btn-util-cart2 .count");
			if ($count.length > 0) {
				$count.text( data.object );
			}
		}
		, error: function ( e ) {}
	});

	if($.isFunction(recommProdForMem)){
		recommProdForMem();
	}
}

/*
app 알림카운트 및 노출 함수
* */
function alimCntSet( cnt ) {
	if ( typeof cnt != 'undefined' && cnt != '' && cnt !== 0 && cnt != '0' ) {
		$('.btn-util-bell .count').text(cnt);
		$('.btn-util-bell .count').show();
	} else {
		$('.btn-util-bell .count').hide();
	}
}


/**
 * 로그인/로그아웃 새로고침 없이 html 수정
 */
function gfnSetMoblieLoginHtml(){
	const $topLoginArea = $('a[id=lnb_top_login_area]');
	const $bottomLoginArea = $('a[id=lnb_bottom_login_area]');
	const $footermLoginArea = $('a[id=lnb_footer_login_area]');

	cmAjax({
		url: '/auth/getLoginInfo'
		, type: 'get'
		, data: $('#searchForm').serialize()
		, dataType: "json"
		, async: false
		, success: function (data) {
			const userInfo = data.object;
			if(userInfo && isEmpty(userInfo.loginId) == false){
				//lnb top
				if($topLoginArea.length > 0){
					$topLoginArea.attr('href', '/mypage/main');
					$topLoginArea.html('<span class="user-level">'+userInfo.userGradeNm+'</span><p class="user-name"><em>'+userInfo.nickNm+'</em>님 <i class="ico-arr-right"></i></p>');
				}
				//lnb bottom
				if($bottomLoginArea.length > 0){
					$bottomLoginArea.attr('href', 'javascript:onSubmitLogout();');
					$bottomLoginArea.html('로그아웃');
				}
				//footer
				if($footermLoginArea.length > 0){
					$footermLoginArea.attr('href', 'javascript:onSubmitLogout();');
					$footermLoginArea.html('로그아웃');
				}
			} else {
				//lnb top
				if($topLoginArea.length > 0){
					$topLoginArea.attr('href', '/auth/login');
					$topLoginArea.html('<em>로그인해주세요</em> <i class="ico-arr-right"></i>');
				}
				//lnb bottom
				if($bottomLoginArea.length > 0){
					$bottomLoginArea.attr('href', '/auth/login');
					$bottomLoginArea.html('로그인');
				}
				//footer
				if($bottomLoginArea.length > 0){
					$footermLoginArea.attr('href', '/auth/login');
					$footermLoginArea.html('로그인');
				}
			}
		}
		, error: function (e) {}
	});
}


var $winW = $(window).width();
var $winH = $(window).height();

//모달팝업
function modalPopup(e){
	/*$(e).show();*/
	$(e).addClass("open");
};

//모달레이어팝업닫기
function modalPopupClose(e){
	/*$(e).hide();*/
	$(e).removeClass("open");
};

function modalPopupRemove(e){
	$scrollTop = $('body').scrollTop();
	$('html').removeClass('is-scr-block');
	$(window).scrollTop($scrollTop);
	$('body').scrollTop(0);
	$(e).remove("");
};


//form
function checkBox(target){
	var chk = $(target).find("input").is(":checked");
	if ( chk ) {
		$(target).removeClass("active");
		$(target).find("input").attr("checked",false);
	} else {
		$(target).addClass("active");
		$(target).find("input").attr("checked",true);
	}
};

function radioButton(target){
	var radioChk = $(target).find("input").is(":checked");
	if ( !radioChk ) {
		$(target).parent().find("label").removeClass("active");
		$(target).parent().find("input").attr("checked",false);
		$(target).addClass("active");
		$(target).find("input").attr("checked",true);
	}
};

function shareKaKaoFunction(title,imageUrl,webUrl,mobileWebUrl){

	const frm = $('form[name="frmShare"]');
	const pageUrl = frm.find('input[name="page_url"]').val();
	if (isEmpty(webUrl)) {
		webUrl = pageUrl;
	}
	Kakao.API.cleanup();
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
			title: title,
			imageUrl: imageUrl,
			link: {
				mobileWebUrl: mobileWebUrl ? mobileWebUrl : webUrl,
				webUrl: webUrl
			}
		},
		buttons: [
			{
				title: '바로가기',
				link: {
					mobileWebUrl: mobileWebUrl ? mobileWebUrl : webUrl,
					webUrl: webUrl
				}
			}
		]
	});
}

function shareFacebookFunction() {
	const frm = $('form[name="frmShare"]');
	const pageUrl = frm.find('input[name="page_url"]').val();
	const facebookUrl = GLOBAL_FACEBOOK_URL;
	let url = facebookUrl + pageUrl;

	window.open(url, '_blank');
}

function shareLineFunction() {
	const frm = $('form[name="frmShare"]');
	const pageUrl = frm.find('input[name="page_url"]').val();
	const pageTxt = frm.find('input[name="page_text"]').val();
	const lineUrl = GLOBAL_LINE_URL;
	let url = lineUrl + pageUrl;

	window.open(url);
}

function shareTwitterFunction() {
	const frm = $('form[name="frmShare"]');
	const pageUrl = frm.find('input[name="page_url"]').val();
	const pageTxt = frm.find('input[name="page_text"]').val();
	const twitterUrl = GLOBAL_TWITTER_URL;
	let url = twitterUrl + 'text=' + pageTxt + '&url=' + pageUrl;

	window.open(url, '_blank');
}

function copyUrl(url) {
	const frm = $('form[name="frmShare"]');
	const pageUrl = frm.find('input[name="page_url"]').val();

	try{
		var t = document.createElement("textarea");
		document.body.appendChild(t);
		t.value = url;
		if ( isEmpty(url) && !isEmpty(pageUrl)) {
			t.value = pageUrl;
		}
		t.select();
		document.execCommand('copy');
		document.body.removeChild(t);
		alert('URL이 복사 되었습니다.');
	}catch(e){
		alert('URL 복사가 실패되었습니다.');
	}
}

function copyToClipboard(el) {
	var t = document.createElement("textarea");
	document.body.appendChild(t);
	t.value = $('#'+el).val();
	if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
		var copyTarget = document.getElementById(el);
		var range = document.createRange();
		range.selectNode(copyTarget);
		window.getSelection().addRange(range);
	}
	else {
		t.select();
	}
	document.execCommand('copy');
	document.body.removeChild(t);
}

function copyObj(obj) {
	const result = {};

	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			result[key] = copyObj(obj[key]);
		} else {
			result[key] = obj[key];
		}
	}

	return result;
}

/***************************************************************
 * 배송업, 입점업체 호출 (Popup)
 ***************************************************************/
function gfn_deliveryCompanyPop(){
	window.open("/etc/footer/deliveryCompanyPop", "deliveryCompanyPop", "top=10, left=10, width=600, height=600, status=no, menubar=no, toolbar=no, resizable=no");
}
function gfn_storeCompanyPop(){
	window.open("/etc/footer/storeCompanyPop", "storeCompanyPop", "top=10, left=10, width=600, height=850, status=no, menubar=no, toolbar=no, resizable=no");
}