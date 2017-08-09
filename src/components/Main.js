require('normalize.css/normalize.css');
require('styles/App.css');
//所有图片吗转换为图片路径
import React from 'react';
var imageDatas=require('../data/imgdata.json');
function getImageURL(imageDataArr){
	for(var i=0,j=imageDataArr.length;i<j;i++){
		var singleImageData=imageDataArr[i];
		singleImageData.imageURL=require('../images/'+singleImageData.fileName);
		imageDataArr[i]=singleImageData;
	}
}
imageDatas=getImageURL(imageDatas)
// imageDatas = (function getImgUrl(imgDatasArr) {
//   for (var i = 0, j = imgDatasArr.length; i < j; i++) {
//     var oneimgData = imgDatasArr[i];
//     oneimgData.imageURL = require('../images/' + oneimgData.fileName);
//     imgDatasArr[i] = oneimgData; //这是引用，可以不要，谨慎起见
//   }
//   return imgDatasArr;
// })(imageDatas);

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      
    
        < section className = "stage"   > 
        < section className = "img-sec" > 
        < /section> 
        < nav className = "controller-nav" > 
        < /nav> 
        < /section > 

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
