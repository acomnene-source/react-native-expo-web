import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image 
          style={styles.logo} 
          source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKYJD0MM5W-WXqn-y8b4LUW-VJOnKKKLKdYfnvu10rQ&s=10'}
        />
        <Text>Meu App</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.card}>
          <Image 
          style={styles.userlogo}
          source={'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}/>
          <View>
            <Text style={styles.titulo}>Ana Beatriz</Text>
            <Text style={styles.name}>anabeatrizcomnene@gmail.com</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6670f5',
    flex: 1,
  },
  box:{
    flex: 1,
    backgroundColor: '#a51010',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  box2:{
    flex: 5,
    backgroundColor: '#0d1eb4',
  },
  logo:{
    width: 100,
    height: 100
  },
  card:{
    backgroundColor: '#fff',
    margin: 30,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  },
  userlogo:{
    width: 70,
    height: 70,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  name:{
    textAlign: 'center',
    fontSize: '17'
  }
});