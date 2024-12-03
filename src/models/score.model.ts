import { DataTypes, Model, Optional } from 'sequelize'
import { sequelizeConnection } from '../config/database'

interface ScoreAttributes {
    sbd: string
    toan?: number
    nguVan?: number
    ngoaiNgu?: number
    vatLi?: number
    hoaHoc?: number
    sinhHoc?: number
    lichSu?: number
    diaLi?: number
    gdcd?: number
    maNgoaiNgu?: string
}

export interface ScoreInput extends Optional<ScoreAttributes, 'sbd'> {}

export class Score extends Model<ScoreAttributes, ScoreInput> implements ScoreAttributes {
    declare sbd: string
    declare toan: number
    declare nguVan: number
    declare ngoaiNgu: number
    declare vatLi: number
    declare hoaHoc: number
    declare sinhHoc: number
    declare lichSu: number
    declare diaLi: number
    declare gdcd: number
    declare maNgoaiNgu: string

    declare readonly createdAt: Date
    declare readonly updatedAt: Date
}


Score.init({
    sbd: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'sbd'
    },
    toan: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'toan'
    },
    nguVan: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'ngu_van'
    },
    ngoaiNgu: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'ngoai_ngu'
    },
    vatLi: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'vat_li'
    },
    hoaHoc: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'hoa_hoc'
    },
    sinhHoc: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'sinh_hoc'
    },
    lichSu: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'lich_su'
    },
    diaLi: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'dia_li'
    },
    gdcd: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'gdcd'
    },
    maNgoaiNgu: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'ma_ngoai_ngu'
    }
}, {
    modelName: 'Score',
    tableName: 'scores',
    sequelize: sequelizeConnection,
})



export default Score
