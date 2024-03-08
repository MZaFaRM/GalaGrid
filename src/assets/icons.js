// Need to make this code concise somehow, couldn't figure out dynamic imports :/
// Will try again later... probably.

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function Icon({type, name, size, color, style}) {
  switch (type) {
    case 'FontAwesome6':
      return <FontAwesome6 name={name} size={size} color={color} style={style}/>;
    case 'FontAwesome5':
      return <FontAwesome5 name={name} size={size} color={color} style={style}/>;
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} color={color}  style={style}/>;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} style={style} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={size} color={color} style={style} />;
    case 'AntDesign':
      return <AntDesign name={name} size={size} color={color} style={style} />;
    case 'Feather':
      return <Feather name={name} size={size} color={color} style={style} />;
    case 'Entypo':
      return <Entypo name={name} size={size} color={color} style={style} />;
    case 'Ionicons':
      return <Ionicons name={name} size={size} color={color} style={style} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={name} size={size} color={color} style={style} />;
    default:
      throw new Error(`Unsupported icon type: ${type}`);
  }
}
