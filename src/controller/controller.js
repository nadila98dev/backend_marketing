const { PrismaClient } = require("@prisma/client")
const { response, json } = require("express")

const prisma = new PrismaClient()

// API call (Get) to retrieve all the data on table Marketing
const getAllDataMarketing = async (req,res) => {
    try {
        const response = await prisma.marketing.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

// API call (Get) to retrieve all the data on table Commission
const getAllDataCommission = async (req,res) => {
    try {
        const response = await prisma.commission.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


// API call (Get) to retrieve all the data on table Penjualan
const getAllDataSelling = async (req, res) => {
    try {
        const response = await prisma.penjualan.findMany()
        res.status(200).json(response)
        
    } catch (error) {
        res.status(500),json({msg:error.message})
    }
}

// Post call to create a payment according to penjualan table then create a new field for table Pembayaran
const createPayment = async (req, res) => {
    try {
        const {transaction_number, marketing_id, amount_paid} = req.body
        // fetch data from transaction according to transaction number
        const transaksi = await prisma.penjualan.findOne({
            where: {
                transaction_number: transaction_number 
            }
        })
        if(!transaksi) {
            return res.status(404).json({message: "Transaksi tidak ditemukan"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
}


module.exports = {getAllDataMarketing, getAllDataCommission, getAllDataSelling}
