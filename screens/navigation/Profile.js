import {StyleSheet, Text, View, Image} from 'react-native';
import ScreenWrapper from '../../components/screenWrapper';
import BottomBar from '../BottomBar';

export default function Profile() {
  return (
    <ScreenWrapper>
      <View style={styles.Bg}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/tioganteng.jpg')}
            className="w-40 h-80"
            style={styles.photo}
          />
          <Image
            source={require('../../assets/images/tioganteng2.jpg')}
            className="w-40 h-80"
            style={styles.photo}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text
              style={{fontSize: 26, fontWeight: 'Bold', textAlign: 'center'}}>
              About Me
            </Text>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Halo Perkenalkan Nama saya Bramantio (152021178) Saya berasal dari
              Garut, Hobi Saya Nonton Anime, Membaca Komik, dan bermain Game,
              impian saya mampu menciptakan dunia isekai dan membangun startup
              developer disana bidang saya di dunia programming itu sebagai Web
              and Mobile Developer, Ada beberapa Skill yang saya cukup kuasai
              yaitu Laravel(Php), Javascript react.js React Native
            </Text>
          </View>
        </View>
        <View style={styles.spacing}></View>
        <BottomBar />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  spacing: {
    paddingVertical: 28,
  },
  photo: {
    margin: 10,
    borderRadius: 200,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  Bg: {
    backgroundColor: '#ccf0e0',
  },
});
