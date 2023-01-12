import React from 'react';
import classes from './ProductDetails.module.css';


const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos)=>{
        const classArr = [classes.ProductImage];

        if(pos === props.currentPreviewImagePos){
            classArr.push(classes.SelectedProductImage);

        }

        return( 
        <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>);
    });

    const featureList = props.data.featureList.map((item,pos)=>{
        const classArr = [classes.FeatureItem];
        if(pos === 1 && props.showHeartBeatSection){
            classArr.push(classes.SelectedFeaturedItem);
        }else if(pos === 0 && !props.showHeartBeatSection){
            classArr.push(classes.SelectedFeaturedItem);  
        }

            return(
                <button onClick={()=>props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
            );
    })



    console.log(props.data);
        
    return(
    
            <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
        
      <h3 className={classes.SectionHeading}>Select Color</h3> 
      <div className={classes.Watches}>
        {colorOptions}
          
        </div> 
        <h3 className={classes.SectionHeading}>Features</h3>
        <div className={classes.TimeHeart}>{featureList}</div>
        <button className={classes.BuyBtn}>Buy Now</button>
      </div>

        
    );
}
export default ProductDetails;