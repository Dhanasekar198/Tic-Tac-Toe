import React,{useState} from 'react'
import { StyleSheet,Alert, Text, View,Button,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'
export default class Home extends React.Component{

    constructor(props){
        super(props);
       this.state={
           gameStart:[
            [0,0,0],
            [0,0,0],
            [0,0,0]
           ],
           currentPlayer:1,
       }
    }
    componentDidMount(){
        this.initializeGame();
    }
    initializeGame=()=>{
        this.setState({
            gameStart:
            [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ],
        })
    }

    newGame=()=>{
        this.initializeGame();
    }

    getWinner=()=>{
        const NUM_TILES=3;
        var sum;
        var arr=this.state.gameStart;
        //Check rows
        for(var i=0;i<NUM_TILES;i++){
            sum=arr[i][0]+arr[i][1]+arr[i][2];
            if(sum==3) return 1;
            else if(sum==-3) return -1;
        }
        //check for column
        for(var i=0;i<NUM_TILES;i++){
            sum=arr[0][i]+arr[1][i]+arr[2][i];
            if(sum==3) return 1;
            else if(sum==-3) return -1;
        }
        //Check for diagonals
        sum=arr[0][0]+arr[1][1]+arr[2][2];
        if(sum==3) return 1;
        else if(sum==-3) return -1;
        sum=arr[2][0]+arr[1][1]+arr[0][2];
        if(sum==3) return 1;
        else if(sum==-3) return -1;
   
        // no Winners

        return 0;
    }
    renderIcons=(row,col)=>{
        var value=this.state.gameStart[row][col];
        switch(value){
            case 1:
                return <Icon name="close" style={styles.iconX}/>
            
            case -1:
               return <Icon name="circle-outline" style={styles.iconO}/>
            
            default:return <View/>
        }
    }
     ChangeTitle=(row,col)=>{
    console.log(row,col);
        var value=this.state.gameStart[row][col];
        if(value!=0) {return;}
      var currentPlayer=this.state.currentPlayer;
      var arr=this.state.gameStart.slice();
      arr[row][col]=currentPlayer;
      this.setState({gameStart:arr});
      
      var nextPlayer=currentPlayer==1 ? -1 :1;
      this.setState({currentPlayer:nextPlayer});
        
      //check for winners
      var winner=this.getWinner();
      if(winner==1){
       Alert.alert("Player 1 is the winner");
       this.initializeGame();
      }else if(winner==-1){
        Alert.alert("Player 2 is the winner");
        this.initializeGame();
      }
    }
 render(){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#b7b7a4' }}>
            <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>this.ChangeTitle(0,0)} style={styles.Last}>
            {this.renderIcons(0,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.ChangeTitle(0,1)} style={styles.topsecond}>
       {this.renderIcons(0,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.ChangeTitle(0,2)} style={styles.Last}>
            {this.renderIcons(0,2)}
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>this.ChangeTitle(1,0)} style={styles.secondfirst}>
            {this.renderIcons(1,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.ChangeTitle(1,1)} style={styles.title}>
            {this.renderIcons(1,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.ChangeTitle(1,2)} style={styles.secondThird}>
            {this.renderIcons(1,2)}
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>this.ChangeTitle(2,0)} style={styles.ThirdFirst}>
            {this.renderIcons(2,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.ChangeTitle(2,1)} style={styles.ThirdSecond}>
            {this.renderIcons(2,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.ChangeTitle(2,2)} style={styles.Last}>
            {this.renderIcons(2,2)}
        </TouchableOpacity>
        </View>  

        <Text 
           onPress={() => this.newGame()}
           style={{ flex: 1, alignItems: 'center', justifyContent: 'center',position:'absolute',top:'500px',backgroundColor:'#0ad',borderRadius:4,padding:'10px',width:'200px',textAlign:'center',fontWeight:'700'}}
        >New Game</Text>
      </View>
    )
 }
}

const styles=StyleSheet.create({
    title:{
        borderWidth:10,
        width:100,
        height:100
    },
    topsecond:{
        borderWidth:10,
        borderTopWidth:0,
        width:100,
        height:100,
        borderBottomWidth:0
    },
    secondfirst:{
        borderWidth:10,
        borderLeftWidth:0,
        width:100,
        height:100,
        borderRightWidth:0
    },
    secondThird:{
        borderWidth:10,
        borderRightWidth:0,
        width:100,
        height:100,
        borderLeftWidth:0  
    },
    ThirdFirst:{
        width:100,
        height:100  
    },
    ThirdSecond:{
        borderWidth:10,
        borderBottomWidth:0,
        width:100,
        height:100,
        borderTopWidth:0  
    },
    Last:{
        width:100,
        height:100,
    },
    iconX:{
        color:'red',
        fontSize:60,
        alignItems:'center',
        justifyContent:'center',    
    },
    iconO:{
        color:'green',
        fontSize:60,
        alignItems:'center',
        justifyContent:'center',
    },
    
})