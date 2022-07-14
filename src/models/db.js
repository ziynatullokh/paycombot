import { Sequelize } from 'sequelize'
import config from '../config.js'
import fs from 'fs'
import path from 'path'

import UserModel from './user/user.js'
import CardModel from './user/card.js'
import WalletModel from './wallet/wallet.js'
import OrderPayCommon from './order/OrderPayCommon.js'
import OrderPayMobileModel from './order/OrderPayMobile.js'
import RegionModel from './merchant/communalRegion.js'
import MerchantModel from './merchant/merchant.js'
import SubRegionModel from './merchant/communalSubRegion.js'
import OrderPayCommunalModel from './order/OrderPayCommunal.js'
import InternetModel from './internet/internet.js'
import TransportModel from './transport/transport.js'

const communal_subregion_data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src','models', 'merchant', 'subRegionData.json')))
const communal_region_data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src','models', 'merchant', 'regionData.json')))
const merchants = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src','models','merchant', 'merchantData.json')))


const sequelize = new Sequelize({
    dialect: 'postgres',
    username: config.PG_USER,
    password: config.PG_PASSWORD,
    host: config.PG_HOST,
    port: config.PG_PORT,
    database: config.PG_DATABASE,
    logging: false
})


export default async function () {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')

        await UserModel({ sequelize })
        await CardModel({ sequelize })
        await WalletModel({ sequelize })
        await OrderPayCommon({ sequelize })
        await OrderPayMobileModel({ sequelize })
        await RegionModel({ sequelize })
        await SubRegionModel({ sequelize })
        await OrderPayCommunalModel({ sequelize })
        await MerchantModel({ sequelize })
        await InternetModel({ sequelize })
        await TransportModel({ sequelize })

        await sequelize.sync( )
        
        await sequelize.models.Regions.bulkCreate(communal_region_data)
        await sequelize.models.Subregion.bulkCreate(communal_subregion_data)
        await sequelize.models.Merchant.bulkCreate(merchants)

        return sequelize
    } catch (error) {
        console.error('Database error:', error.message)
        return sequelize
    }
}