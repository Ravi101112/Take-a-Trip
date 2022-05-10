import React from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const styles=StyleSheet.create({
  title:{fontSize:26,justifyContent:'center'},
  image:{height:'70%' ,width:'90%',padding:10,marginTop:40,marginBottom:10},
  text:{fontSize:18,marginTop:10},
});

const slides = [
  {
    key: 1,
    image: require('../assets/image1.jpeg'),
    title: 'WELCOME!',
    text: 'lets dive into the world of startup',
    
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Things you can build!',
    text: 'creativity ,skills, passion and hardwork',
   
    image: require('../assets/image2.jpeg'),
    backgroundColor: '#000000',
  },
  {
    key: 3,
    title: '     Discover your \n own Dream Startup',
    text: 'so lets get started',
    image: require('../assets/image3.png'),
    backgroundColor: '#22bcb5',
    
  }
];

export default class App extends React.Component {

    constructor(props){
        super(props);
       this.state = {
    showRealApp: false
  };
}
  _renderItem = ({ item }) => {
   
    return (
      <View style={{flex:1 ,alignItems:'center'}}>
        <Image style={styles.image} Image source={item.image} />
        <Text style={styles.title} >{item.title}</Text>
        
        <Text style={styles.text}>{item.text}</Text>
       
      
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}