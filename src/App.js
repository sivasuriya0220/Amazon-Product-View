import React, {Component} from 'react';

import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImagePos:0,
    showHeartBeatSection:false,
  }
  
  onColorOptionClick = (pos) =>{
    this.setState({currentPreviewImagePos:pos});
  }

  onFeatureItemClick = (pos) =>{
    let updatedState = false;
    if(pos === 1){
      updatedState = true;
    }
    this.setState({showHeartBeatSection: updatedState})
  }
  render(){

    return (
      <div className="App">
         <Topbar/>
      
        <div className={classes.MainContainer}>
         <div className={classes.ProductPreview}>
          <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
           showHeartBeatSection={this.state.showHeartBeatSection} />
         </div>
  
         <div className={classes.ProductData}>
          <ProductDetails data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick}
          currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick}/>
         </div>
        </div>
      </div>
    );
    
  }
  

}

export default App;
