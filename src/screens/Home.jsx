import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AllItems from './AllItems';
import Create from './Create';

const storeItems = [
  { id: 1, name: 'Rice', stock: 200, unit: 'kg' },
  { id: 2, name: 'Wheat Flour (Atta)', stock: 150, unit: 'kg' },
  { id: 3, name: 'Cooking Oil', stock: 90, unit: 'liters' },
  { id: 4, name: 'Sugar', stock: 18, unit: 'kg' },
  { id: 5, name: 'Salt', stock: 100, unit: 'kg' },
  { id: 6, name: 'Milk', stock: 60, unit: 'liters' },
  { id: 7, name: 'Eggs', stock: 500, unit: 'pieces' },
  { id: 8, name: 'Bread', stock: 80, unit: 'loaves' },
  { id: 9, name: 'Tea', stock: 10, unit: 'packs' },
  { id: 10, name: 'Lentils (Dal)', stock: 110, unit: 'kg' },
];

const Home = () => {
  const [view, setView] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setView(0)}
        >
          <Text
            style={[styles.btnText, view === 0 ? { color: 'white' } : null]}
          >
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 1 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setView(1)}
        >
          <Text
            style={[styles.btnText, view === 1 ? { color: 'white' } : null]}
          >
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setView(2)}
        >
          <Text
            style={[styles.btnText, view === 2 ? { color: 'white' } : null]}
          >
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={storeItems} />}
      {view === 1 && (
        <AllItems data={storeItems.filter(item => item.stock < 20)} />
      )}
      {view === 2 && <Create />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
  },
  btnText: {
    color: 'green',
    fontSize: 12,
  },
});
