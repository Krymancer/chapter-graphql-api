import {DataTypes, Model} from 'sequelize';
import sequelize from './index';

class Pokemon extends Model {};

Pokemon.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  species: {type: DataTypes.STRING},
  image: {type: DataTypes.STRING},
  types: {type: DataTypes.STRING},
}, {
  sequelize,
  paranoid: true,
  modelName: 'Pokemon',
});

export default Pokemon;
