import { View, StyleSheet } from 'react-native'
import Herder from '../components/Header'
import MemoListItem from '../components/MemoListItem'
import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Herder />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})

export default Index
