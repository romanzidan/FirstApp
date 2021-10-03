import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('==> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   // Dipanggil ketika terjadi Update
//   componentDidUpdate() {
//     console.log('==> component did update');
//   }

//   // Dipanggil ketika component Hilang
//   componentWillUnmount() {
//     console.log('==> component will unmount');
//   }

//   render() {
//     return (
//       <>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#dfe6e9',
//             alignItems: 'flex-end',
//             justifyContent: 'center',
//           }}>
//           <View style={{backgroundColor: '#d63031', width: 50, height: 100}} />
//           <View style={{backgroundColor: '#0984e3', flex: 2, height: 100}} />
//           <View style={{backgroundColor: '#fdcb6e', flex: 3, height: 100}} />
//           <View style={{backgroundColor: '#00b894', flex: 4, height: 100}} />
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             marginTop: 10,
//           }}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//         </View>
//         <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
//           <Image
//             source={{
//               uri: 'https://randomuser.me/api/portraits/men/36.jpg',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Kyze Luci Garendra
//             </Text>
//             <Text>{this.state.subscriber} ribu subscriber</Text>
//           </View>
//         </View>
//       </>
//     );
//   }
// }

const FlexBox = () => {
  const [subs, setSubs] = useState(100);

  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubs(300);
    }, 3000);
    return () => {
      console.log('did update');
    };
  }, [subs]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubs(300);
  //   }, 2000);
  // }, [subs]);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#dfe6e9',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <View style={{backgroundColor: '#d63031', width: 50, height: 100}} />
        <View style={{backgroundColor: '#0984e3', flex: 2, height: 100}} />
        <View style={{backgroundColor: '#fdcb6e', flex: 3, height: 100}} />
        <View style={{backgroundColor: '#00b894', flex: 4, height: 100}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/men/36.jpg',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Kyze Luci Garendra
          </Text>
          <Text>{subs} ribu subscriber</Text>
        </View>
      </View>
    </>
  );
};

export default FlexBox;
