import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class User extends Model {
    public id!: number;
    public name!: string;
    public emai!: string;
    public status!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'usuarios',
        timestamps: false,
    },
);

export default User;
