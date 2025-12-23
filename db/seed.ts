import { db, Orders, Operations, Colors, Invest } from 'astro:db';

// Esta función se ejecuta para llenar la tabla con datos iniciales
export default async function seed() {

  await db.insert(Colors).values([
    {
      id: 1,
      color: "c-green",
      text: "Menos de 20$ (2%)",
      details: "*2% de la liquidez mensual disponible para inversión. En el ejemplo son 1.000$ mensuales."
    },
    {
      id: 2,
      color: "c-blue",
      text: "Entre 20$ y 50$ (2%-5%)"
    },
    {
      id: 3,
      color: "c-violet",
      text: "Entre 50$ y 100$ (5%-10$)"
    },
    {
      id: 4,
      color: "c-orange",
      text: "Más de 100$ (10% o más)"
    },
    {
      id: 5,
      color: "c-yellow",
      text: "Seguro anti subida de BTC (10% de la liquidez mensual)"
    },
    {
      id: 6,
      color: "c-new text-pink-400",
      text: "Publicado hace menos de 10 días"
    }
  ]);

  // Insertar datos de la tabla Invest
  await db.insert(Invest).values([
    {
      mes: "11/25",
      entradas: "36,7%",
      salidas: "0%",
      invertido: "36,7%"
    },
    {
      mes: "10/25",
      entradas: "27%",
      salidas: "0%",
      invertido: "27%"
    },
    {
      mes: "09/25",
      entradas: "56,85%",
      salidas: "0%",
      invertido: "56,85%"
    },
    {
      mes: "08/25",
      entradas: "41%",
      salidas: "0%",
      invertido: "41%"
    },
    {
      mes: "07/25",
      entradas: "41%",
      salidas: "0%",
      invertido: "41%"
    },
    {
      mes: "06/25",
      entradas: "41%",
      salidas: "0%",
      invertido: "41%"
    },
    {
      mes: "05/25",
      entradas: "41%",
      salidas: "0%",
      invertido: "41%"
    },
    {
      mes: "04/25",
      entradas: "41%",
      salidas: "0%",
      invertido: "41%"
    },
    {
      mes: "03/25",
      entradas: "13,1%",
      salidas: "0%",
      invertido: "13,10%"
    },
    {
      mes: "02/25",
      entradas: "16,07%",
      salidas: "0%",
      invertido: "16,07%"
    },
    {
      mes: "01/25",
      entradas: "3,56%",
      salidas: "0,19%",
      invertido: "3,37%"
    },
    {
      mes: "12/24",
      entradas: "19,55%",
      salidas: "3,42%",
      invertido: "16,13%"
    },
    {
      mes: "11/24",
      entradas: "12,76%",
      salidas: "3,86%",
      invertido: "8,9%"
    },
    {
      mes: "Promedio",
      entradas: "30,73%",
      salidas: "0.57%",
      invertido: "30,16%"
    },
    {
      mes: "Invertido",
      entradas: "-",
      salidas: "Σ de invertido",
      invertido: "3.995,5 $"
    },
    {
      mes: "No Invertido",
      entradas: "-",
      salidas: "Σ de no invertido",
      invertido: "9.004,5 $"
    }
  ]);

  await db.insert(Orders).values([
    {
      created_at: new Date('2025-12-05T10:01:00'),
      token: "MSTR",
      amount: "1 MSTR",
      pair: "MSTR/USDC",
      operation: "COMPRA",
      price: "1 MSTR = 135.8 USDC",
      color: "c-new c-orange",
      details: "Potencial compra de la acción de Strategy (Disponible en brokers como Revolut) para tomar una posición más apalancada sin tener que gestionar el precio de liquidación ni el pago de intereses"
    },
    {
      created_at: new Date('2025-11-18T11:05:00'),
      token: "ETH",
      amount: "0.09 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 1673.26 USDC",
      color: "c-new c-orange"
    },
    {
      created_at: new Date('2025-11-18T11:04:00'),
      token: "ETH",
      amount: "0.0285 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 2103.53 USDC",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-11-18T11:03:00'),
      token: "BNB",
      amount: "0.1 BNB",
      pair: "BNB/USDC",
      operation: "COMPRA",
      price: "1 BNB = 697 USDC",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-11-18T11:02:00'),
      token: "FET",
      amount: "400 FET",
      pair: "FET/USDC",
      operation: "COMPRA",
      price: "1 FET = 0.1634 USDC",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-11-18T11:01:00'),
      token: "LINK",
      amount: "9 LINK",
      pair: "LINK/EUR",
      operation: "COMPRA",
      price: "1 LINK = 9.3 EUR",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-11-18T11:00:00'),
      token: "ADA",
      amount: "500 ADA",
      pair: "ADA/EUR",
      operation: "COMPRA",
      price: "1 ADA = 0.268 EUR",
      color: "c-new c-orange"
    },
    {
      created_at: new Date('2025-09-14T10:00:00'),
      token: "ADA",
      amount: "20 ADA",
      pair: "ADA/USDC",
      operation: "VENTA",
      price: "1 ADA = 1.4186 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-09-14T09:45:00'),
      token: "ADA",
      amount: "25 ADA",
      pair: "ADA/BTC",
      operation: "VENTA",
      price: "1 ADA = 0.00002164 BTC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-14T09:30:00'),
      token: "LINK",
      amount: "1 LINK",
      pair: "LINK/BTC",
      operation: "VENTA",
      price: "1 LINK = 0.0003872 BTC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-09-14T09:15:00'),
      token: "SOL",
      amount: "0.2 SOL",
      pair: "SOL/BTC",
      operation: "VENTA",
      price: "1 SOL = 0.00354 BTC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-14T09:00:00'),
      token: "GRT",
      amount: "92 GRT",
      pair: "GRT/BTC",
      operation: "VENTA",
      price: "1 GRT = 0.00000396 BTC",
      color: "c-normal c-blue"
    }
  ]);

  // Insertamos todas las operaciones históricas con fechas manuales completas
  await db.insert(Operations).values([
    {
      created_at: new Date('2025-12-01T10:06:00'),
      date: "01/12/25",
      token: "AVAX",
      amount: "6 AVAX",
      pair: "AVAX/BTC",
      operation: "COMPRA",
      price: "1 AVAX = 0.00015093 BTC",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-11-19T10:00:00'),
      date: "19/11/25",
      token: "ADA",
      amount: "180 ADA",
      pair: "ADA/BTC",
      operation: "COMPRA",
      price: "1 ADA = 0,00000483 BTC",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-11-18T13:05:00'),
      date: "04/11/25",
      token: "SURF",
      amount: "800 SURF",
      pair: "SURF/ADA",
      operation: "COMPRA",
      price: "1 SURF = 0.194 ADA",
      color: "c-new c-violet",
      details: "No puse esta operación en la anterior modificación, pero los que hablais conmigo estabais avisados de su existencia"
    },
    {
      created_at: new Date('2025-11-18T13:04:00'),
      date: "04/11/25",
      token: "LINK",
      amount: "2 LINK",
      pair: "LINK/EUR",
      operation: "COMPRA",
      price: "1 LINK = 12.5 EUR",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-11-18T13:04:00'),
      date: "04/11/25",
      token: "ARB",
      amount: "100 ARB",
      pair: "ARB/USDC",
      operation: "COMPRA",
      price: "1 ARB = 0.251 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-11-18T13:03:00'),
      date: "04/11/25",
      token: "OP",
      amount: "85 OP",
      pair: "OP/USDC",
      operation: "COMPRA",
      price: "1 OP = 0.326 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-11-18T13:02:00'),
      date: "04/11/25",
      token: "SUI",
      amount: "25 SUI",
      pair: "SUI/USDC",
      operation: "COMPRA",
      price: "1 SUI = 1.77 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-11-18T13:01:00'),
      date: "04/11/25",
      token: "AVAX",
      amount: "1.2 AVAX",
      pair: "AVAX/EUR",
      operation: "COMPRA",
      price: "1 AVAX = 13.68 EUR",
      color: "c-new c-green"
    },
    {
      created_at: new Date('2025-11-18T13:00:00'),
      date: "04/11/25",
      token: "ADA",
      amount: "100 ADA",
      pair: "ADA/EUR",
      operation: "COMPRA",
      price: "1 ADA = 0.44 EUR",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-11-18T12:05:00'),
      date: "11/10/25",
      token: "ONDO",
      amount: "36 ONDO",
      pair: "ONDO/USDC",
      operation: "COMPRA",
      price: "1 ONDO = 0.84 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-11-18T12:04:00'),
      date: "11/10/25",
      token: "ADA",
      amount: "41 ADA",
      pair: "ADA/USDC",
      operation: "COMPRA",
      price: "1 ADA = 0.738 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-11-18T12:03:00'),
      date: "11/10/25",
      token: "XMR",
      amount: "0.118 XMR",
      pair: "XMR/USDC",
      operation: "COMPRA",
      price: "1 XMR = 254 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-11-18T12:02:00'),
      date: "11/10/25",
      token: "SUI",
      amount: "25 SUI",
      pair: "SUI/USDC",
      operation: "COMPRA",
      price: "1 SUI = 2.61 USDC",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-11-18T12:01:00'),
      date: "11/10/25",
      token: "LINK",
      amount: "3.75 LINK",
      pair: "LINK/USDC",
      operation: "COMPRA",
      price: "1 LINK = 17.35 USDC",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-11-18T12:00:00'),
      date: "11/10/25",
      token: "HYPE",
      amount: "1.78 HYPE",
      pair: "HYPE/USDC",
      operation: "COMPRA",
      price: "1 HYPE = 36.58 USDC",
      color: "c-new c-violet"
    },
    {
      created_at: new Date('2025-09-25T12:45:00'),
      date: "25/09/25",
      token: "SUI",
      amount: "9.75 SUI",
      pair: "SUI/USDC",
      operation: "COMPRA",
      price: "1 SUI = 3.08 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-09-25T11:45:00'),
      date: "25/09/25",
      token: "LINK",
      amount: "1.44 LINK",
      pair: "LINK/USDC",
      operation: "COMPRA",
      price: "1 LINK = 20.96 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-09-23T11:45:00'),
      date: "23/09/25",
      token: "HYPE",
      amount: "0.6453 HYPE",
      pair: "HYPE/USDC",
      operation: "COMPRA",
      price: "1 HYPE = 46.49 USDC",
      color: "c-new c-blue"
    },
    {
      created_at: new Date('2025-09-16T11:45:00'),
      date: "16/09/25",
      token: "HYPE",
      amount: "0.444 HYPE",
      pair: "HYPE/USDC",
      operation: "COMPRA",
      price: "1 HYPE = 54 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-09-16T11:40:00'),
      date: "16/09/25",
      token: "LINK",
      amount: "1 LINK",
      pair: "LINK/USDC",
      operation: "COMPRA",
      price: "1 LINK = 23.5 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-09-16T11:35:00'),
      date: "16/09/25",
      token: "XMR",
      amount: "0.069 XMR",
      pair: "XMR/USDC",
      operation: "COMPRA",
      price: "1 XMR = 320 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-09-15T11:35:00'),
      date: "15/09/25",
      token: "BTC",
      amount: "0.000524 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 114491 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-15T12:30:00'),
      date: "15/09/25",
      token: "ETH",
      amount: "0.005568 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 4490 USDC",
      color: "c-normal c-blue",
      details: "Última compra de las ordenes automáticas que empezamos en Abril con razón de la subida del oro y oportunidades a la vista. A partir de ahora entramos en un periodo más manual donde seleccionaremos altcoins y comenzaremos a desprendernos de liquidez."
    },
    {
      created_at: new Date('2025-09-15T11:35:00'),
      date: "15/09/25",
      token: "BTC",
      amount: "0.000524 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 114491 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-15T11:30:00'),
      date: "10/09/25",
      token: "BTC",
      amount: "0.000538 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 111526 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-15T11:25:00'),
      date: "05/09/25",
      token: "BTC",
      amount: "0.000534 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 112260 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-15T11:25:00'),
      date: "05/09/25",
      token: "BTC",
      amount: "0.000534 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 112260 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-04T10:30:00'),
      date: "04/09/25",
      token: "SURF",
      amount: "280 SURF",
      pair: "SURF/ADA",
      operation: "COMPRA",
      price: "1 SURF = 0.3577 ADA",
      color: "c-normal c-violet",
      details: "Moneda del ecosistema de Cardano, se puede comprar en dexhunter.io a través de una billetera cómo pueda ser Yoroi. Muy especulativo, pero si logramos triplicar la inversión en 3 meses ya habrá valido la pena."
    },
    {
      created_at: new Date('2025-09-01T10:30:00'),
      date: "30/08/25",
      token: "ETH",
      amount: "0.00574 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 4355 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-09-01T09:25:00'),
      date: "30/08/25",
      token: "BTC",
      amount: "0.000557 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 107794 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-01T09:20:00'),
      date: "25/08/25",
      token: "BTC",
      amount: "0.000539 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 111219 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-09-01T09:15:00'),
      date: "20/08/25",
      token: "BTC",
      amount: "0.00053 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 113364 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-08-15T10:30:00'),
      date: "15/08/25",
      token: "ETH",
      amount: "0.005648 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 4426 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-08-15T09:15:00'),
      date: "15/08/25",
      token: "BTC",
      amount: "0.000511 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 117324 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-08-10T14:20:00'),
      date: "10/08/25",
      token: "BTC",
      amount: "0.000503 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 119309 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-08-05T16:45:00'),
      date: "05/08/25",
      token: "BTC",
      amount: "0.000526 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 114148 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-07-30T11:30:00'),
      date: "30/07/25",
      token: "ETH",
      amount: "0.006567 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 3807 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-07-30T10:15:00'),
      date: "30/07/25",
      token: "BTC",
      amount: "0.000509 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 117857 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-07-25T13:45:00'),
      date: "25/07/25",
      token: "BTC",
      amount: "0.000510 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 117595 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-07-20T15:20:00'),
      date: "20/07/25",
      token: "BTC",
      amount: "0.000511 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 117344 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-07-15T12:10:00'),
      date: "15/07/25",
      token: "ETH",
      amount: "0.007980 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 3133 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-07-15T11:55:00'),
      date: "15/07/25",
      token: "BTC",
      amount: "0.000510 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 117685 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-07-10T09:30:00'),
      date: "10/07/25",
      token: "BTC",
      amount: "0.000518 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 115909 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-07-05T14:15:00'),
      date: "05/07/25",
      token: "BTC",
      amount: "0.000554 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 108283 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-06-30T16:45:00'),
      date: "30/06/25",
      token: "ETH",
      amount: "0.010043 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 2489 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-06-30T16:30:00'),
      date: "30/06/25",
      token: "BTC",
      amount: "0.000560 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 107199 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-06-25T11:20:00'),
      date: "25/06/25",
      token: "BTC",
      amount: "0.000559 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 107249 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-06-20T13:45:00'),
      date: "20/06/25",
      token: "BTC",
      amount: "0.000581 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 103335 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-06-15T15:30:00'),
      date: "15/06/25",
      token: "ETH",
      amount: "0.009809 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 2549 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-06-15T15:15:00'),
      date: "15/06/25",
      token: "BTC",
      amount: "0.000568 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 105595 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-06-10T10:45:00'),
      date: "10/06/25",
      token: "BTC",
      amount: "0.000544 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 110282 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-06-05T12:30:00'),
      date: "05/06/25",
      token: "BTC",
      amount: "0.000590 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 101704 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-05-30T12:30:00'),
      date: "30/05/25",
      token: "ETH",
      amount: "0.009885 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 2529 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-05-30T12:15:00'),
      date: "30/05/25",
      token: "BTC",
      amount: "0.000577 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 104066 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-05-25T14:45:00'),
      date: "25/05/25",
      token: "BTC",
      amount: "0.000550 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 109054 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-05-20T16:20:00'),
      date: "20/05/25",
      token: "BTC",
      amount: "0.000562 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 106836 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-05-15T11:30:00'),
      date: "15/05/25",
      token: "ETH",
      amount: "0.009815 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 2547 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-05-15T11:15:00'),
      date: "15/05/25",
      token: "BTC",
      amount: "0.000578 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 103869 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-05-10T13:45:00'),
      date: "10/05/25",
      token: "BTC",
      amount: "0.000575 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 104379 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-05-05T15:30:00'),
      date: "05/05/25",
      token: "BTC",
      amount: "0.000633 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 94857 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-04-30T10:45:00'),
      date: "30/04/25",
      token: "ETH",
      amount: "0.01695 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 1770 USDC",
      color: "c-normal c-blue",
      details: "Conforme a la actualización del 16/04, previa a la reciente subida del 16% de BTC, la estrategia de Cryptopedia es aumentar el volumen de compras. Estaré ausente durante mayo y regresaré en junio, por lo que he dejado órdenes pendientes configuradas. Salvo eventos extraordinarios, estas órdenes seguirán ejecutándose y para que no se cancelen se requiere que el precio de BTC se mantenga por debajo de $85k si el oro cae bajo los $2,900; por debajo de $100k si el oro baja de $3,100; y que no supere los $112k mientras el precio del oro no haya excedido los $3,700."
    },
    {
      created_at: new Date('2025-04-30T10:30:00'),
      date: "30/04/25",
      token: "BTC",
      amount: "0.000635 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 94260 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-04-25T12:45:00'),
      date: "25/04/25",
      token: "BTC",
      amount: "0.000639 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 93820 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-04-20T14:30:00'),
      date: "20/04/25",
      token: "BTC",
      amount: "0.000711 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 84357 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-04-15T16:15:00'),
      date: "15/04/25",
      token: "ETH",
      amount: "0.01572 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 1590 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-04-15T16:00:00'),
      date: "15/04/25",
      token: "BTC",
      amount: "0.00072 BTC",
      pair: "BTC/USDC",
      operation: "COMPRA",
      price: "1 BTC = 83900 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-04-06T11:30:00'),
      date: "06/04/25",
      token: "ETH",
      amount: "0.03072 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 1628 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-04-06T11:15:00'),
      date: "06/04/25",
      token: "SOL",
      amount: "0.2823 SOL",
      pair: "SOL/USDC",
      operation: "COMPRA",
      price: "1 SOL = 106.25 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-04-06T11:00:00'),
      date: "06/04/25",
      token: "LINK",
      amount: "2.6 LINK",
      pair: "LINK/USDC",
      operation: "COMPRA",
      price: "1 LINK = 11.57 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-03-11T13:45:00'),
      date: "11/03/25",
      token: "ETH",
      amount: "0.0274 ETH",
      pair: "ETH/USDC",
      operation: "COMPRA",
      price: "1 ETH = 1826 USDC",
      color: "c-normal c-violet"
    },
    {
      created_at: new Date('2025-03-11T13:30:00'),
      date: "11/03/25",
      token: "SEI",
      amount: "57 SEI",
      pair: "SEI/USDC",
      operation: "COMPRA",
      price: "1 SEI = 0.178 USDC",
      color: "c-normal c-green"
    },
    {
      created_at: new Date('2025-03-10T15:20:00'),
      date: "10/03/25",
      token: "SOL",
      amount: "0.157 SOL",
      pair: "SOL/USDC",
      operation: "COMPRA",
      price: "1 SOL = 127.59 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-03-09T10:30:00'),
      date: "09/03/25",
      token: "ARB",
      amount: "57 ARB",
      pair: "ARB/USDC",
      operation: "COMPRA",
      price: "1 ARB = 0.356 USDC",
      color: "c-normal c-blue",
      details: "Si has prestado atención al mercado habrás observado que ETH ha corregido mucho contra BTC en los últimos meses, quizás esta opción correlacionada tenga más sentido. Otras opciones similares serían: OP = 0,761$, POL = 0.248$"
    },
    {
      created_at: new Date('2025-03-09T10:15:00'),
      date: "09/03/25",
      token: "FET",
      amount: "36 FET",
      pair: "FET/USDC",
      operation: "COMPRA",
      price: "1 FET = 0.57 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-03-09T10:00:00'),
      date: "09/03/25",
      token: "TON",
      amount: "3.7 TON",
      pair: "TON/USDC",
      operation: "COMPRA",
      price: "1 TON = 2.7 USDC",
      color: "c-normal c-green"
    },
    {
      created_at: new Date('2025-02-28T14:45:00'),
      date: "28/02/25",
      token: "UNI",
      amount: "2.7 UNI",
      pair: "UNI/USDC",
      operation: "COMPRA",
      price: "1 UNI = 7.41 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-02-28T14:30:00'),
      date: "28/02/25",
      token: "VET",
      amount: "72 VET",
      pair: "VET/USDC",
      operation: "COMPRA",
      price: "1 VET = 0.279 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-02-25T12:20:00'),
      date: "25/02/25",
      token: "SUI",
      amount: "7.7 SUI",
      pair: "SUI/USDC",
      operation: "COMPRA",
      price: "1 SUI = 2.66 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-02-25T12:05:00'),
      date: "25/02/25",
      token: "ONDO",
      amount: "22 ONDO",
      pair: "ONDO/USDC",
      operation: "COMPRA",
      price: "1 ONDO = 0.937 USDC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2025-02-03T16:30:00'),
      date: "03/02/25",
      token: "NKN",
      amount: "180 NKN",
      pair: "NKN/USDC",
      operation: "COMPRA",
      price: "1 NKN = 0.0557 USDC",
      color: "c-normal c-green",
      details: "Este proyecto aunque ha sido muy castigado por el mercado, es histórico y tiene una capitalización muy baja, por lo que es arriesgado pero a su vez una oportunidad."
    },
    {
      created_at: new Date('2025-02-03T16:15:00'),
      date: "03/02/25",
      token: "SYS",
      amount: "150 SYS",
      pair: "SYS/USDC",
      operation: "COMPRA",
      price: "1 SYS = 0.0677 USDC",
      color: "c-normal c-green",
      details: "Este proyecto aunque ha sido muy castigado por el mercado, es histórico y reconocido por aquellos que entraron hace muchos años."
    },
    {
      created_at: new Date('2025-02-03T16:00:00'),
      date: "03/02/25",
      token: "BAT",
      amount: "55 BAT",
      pair: "BAT/USDC",
      operation: "COMPRA",
      price: "1 BAT = 0.1835 USDC",
      color: "c-normal c-green",
      details: "Navegador con muchisimos usuarios"
    },
    {
      created_at: new Date('2025-02-03T15:45:00'),
      date: "03/02/25",
      token: "DOT",
      amount: "4.1 DOT",
      pair: "DOT/USDC",
      operation: "COMPRA",
      price: "1 DOT = 4.9 USDC",
      color: "c-normal c-blue",
      details: "Aprovechando la volatilidad por el dia de la investidura de Trump, he creído y así lo avisé que podríamos ver precios extremos. Finalmente China con Deep Seek ha provocado este movimiento negativo en el mercado (no es casualidad la llegada a la presidencia de Trump)."
    },
    {
      created_at: new Date('2025-02-02T14:30:00'),
      date: "02/02/25",
      token: "KSM",
      amount: "1 KSM",
      pair: "KSM/USDC",
      operation: "COMPRA",
      price: "1 KSM = 21.56 USDC",
      color: "c-normal c-blue",
      details: "Aprovechando la volatilidad por el dia de la investidura de Trump, creo que podemos ver precios extremos."
    },
    {
      created_at: new Date('2025-02-02T14:15:00'),
      date: "02/02/25",
      token: "AVAX",
      amount: "0.5 AVAX",
      pair: "AVAX/BTC",
      operation: "COMPRA",
      price: "1 AVAX = 0.000309 BTC",
      color: "c-normal c-green",
      details: "Operación que no estaba en las ordenes pendientes. Es el mínimo contra BTC desde 2021, cuando se acababa de crear el proyecto que hoy en día ocupa la posición 14ª."
    },
    {
      created_at: new Date('2025-02-02T14:00:00'),
      date: "02/02/25",
      token: "FLOKI",
      amount: "65K FLOKI",
      pair: "FLOKI/BTC",
      operation: "COMPRA",
      price: "1 FLOKI = 0.0(^8)1177 BTC",
      color: "c-normal c-green",
      details: "Dentro de la especulación como memecoin, Floki ha demostrado una cierta fortaleza cuando no hay grandes movimientos."
    },
    {
      created_at: new Date('2025-01-27T16:45:00'),
      date: "27/01/25",
      token: "ADA",
      amount: "23 ADA",
      pair: "ADA/USDC",
      operation: "COMPRA",
      price: "1 ADA = 0.881 USDC",
      color: "c-normal c-blue",
      details: "Aprovechando la volatilidad por el dia de la investidura de Trump, he creído y así lo avisé que podríamos ver precios extremos. Finalmente China con Deep Seek ha provocado este movimiento negativo en el mercado (no es casualidad la llegada a la presidencia de Trump)."
    },
    {
      created_at: new Date('2025-01-22T12:30:00'),
      date: "22/01/25",
      token: "Thena",
      amount: "17 Thena",
      pair: "THE/USDC",
      operation: "COMPRA",
      price: "1 THE = 0.845 USDC",
      color: "c-normal c-green",
      details: "Operación que estaba pendiente desde hace mucho tiempo. Es bastante especulativa"
    },
    {
      created_at: new Date('2025-01-22T12:15:00'),
      date: "22/01/25",
      token: "ROSS",
      amount: "8500 ROSS",
      pair: "ROSS/SOL",
      operation: "COMPRA",
      price: "1 ROSS = 0.0000177 SOL",
      color: "c-normal c-blue",
      details: "Ya ha sido liberado ROSS!! Trump ha cumplido su promesa, pero el precio ha seguido el movimiento contrario. Hacemos esta operación muy arriesgada con la esperanza de que Ross vaya al programa de Joe Rogan"
    },
    {
      created_at: new Date('2025-01-19T15:30:00'),
      date: "19/01/25",
      token: "ROSS",
      amount: "1000 ROSS",
      pair: "ROSS/SOL",
      operation: "VENTA",
      price: "1 ROSS = 0.00015 SOL",
      color: "c-normal c-blue",
      details: "Esta venta se ha realizado con el objetivo de recuperar toda la inversión inicial en $. Hemos vendido el 20% del ROSS comprado y hemos podido recuperar los $ gastados. El resto lo dejamos por si hay una gran subida"
    },
    {
      created_at: new Date('2025-01-19T15:15:00'),
      date: "19/01/25",
      token: "SOL",
      amount: "0.07 SOL",
      pair: "SOL/BTC",
      operation: "VENTA",
      price: "1 SOL = 0.0027 BTC",
      color: "c-normal c-blue",
      details: "SOL esta luchando por superar el marketcap de XRP, lo que proyectaría el precio desde los 290$ actuales hasta los 369$ sin embargo debido a la alta especulación, siempre está bien asegurarse algo de BTC"
    },
    {
      created_at: new Date('2025-01-13T11:45:00'),
      date: "13/01/25",
      token: "ROSS",
      amount: "1300 ROSS",
      pair: "ROSS/SOL",
      operation: "VENTA",
      price: "1 ROSS = 0.00016 SOL",
      color: "c-normal c-blue",
      details: "Creo que todavía puede subir mucho más, es por ello que solamente he vendido el 10% de la posición aprox, recuperando casi 1/3 de la inversión. También conseguimos bajar el precio de equilibrio hasta los 0.0(4)31 SOL o lo que es lo mismo, ahora debería de bajar un 75% el precio para empezar a tener perdidas."
    },
    {
      created_at: new Date('2025-01-13T11:30:00'),
      date: "13/01/25",
      token: "SOL",
      amount: "0.06 SOL",
      pair: "SOL/USDC",
      operation: "COMPRA",
      price: "1 SOL = 170.56 USDC",
      color: "c-normal c-green"
    },
    {
      created_at: new Date('2024-12-20T14:45:00'),
      date: "20/12/24",
      token: "FET",
      amount: "6 FET",
      pair: "FET/BTC",
      operation: "COMPRA",
      price: "1 FET = 0.0(^4)1284 BTC",
      color: "c-normal c-green",
      details: "Narrativa de IA (en nuestra opinión este sector va a sostener a la economía en los próximos años)."
    },
    {
      created_at: new Date('2024-12-20T14:30:00'),
      date: "20/12/24",
      token: "CELO",
      amount: "16 CELO",
      pair: "CELO/USDC",
      operation: "COMPRA",
      price: "1 CELO = 0.634 USDC",
      color: "c-normal c-green",
      details: "Me parece interesante esta operación."
    },
    {
      created_at: new Date('2024-12-20T14:15:00'),
      date: "20/12/24",
      token: "KSM",
      amount: "0.27 KSM",
      pair: "KSM/USDC",
      operation: "COMPRA",
      price: "1 KSM = 27.89 USDC",
      color: "c-normal c-green",
      details: "Red de pruebas de Polkadot."
    },
    {
      created_at: new Date('2024-12-19T16:30:00'),
      date: "19/12/24",
      token: "Simon's CAT",
      amount: "250K CAT",
      pair: "CAT/BTC",
      operation: "COMPRA",
      price: "1 CAT = 0.0^(9)413 BTC",
      color: "c-normal c-green",
      details: "Disponible en pocos exchanges, es una memecoin."
    },
    {
      created_at: new Date('2024-12-19T16:15:00'),
      date: "19/12/24",
      token: "SOL",
      amount: "0.05 SOL",
      pair: "SOL/USDC",
      operation: "COMPRA",
      price: "1 SOL = 203.1 USDC",
      color: "c-normal c-green"
    },
    {
      created_at: new Date('2024-12-19T16:00:00'),
      date: "19/12/24",
      token: "CAKE",
      amount: "3 CAKE",
      pair: "CAKE/USDT",
      operation: "COMPRA",
      price: "1 CAKE = 2.79 USDT",
      color: "c-normal c-green",
      details: "Se trata del principal DEX de Binance Smart Chain."
    },
    {
      created_at: new Date('2024-12-09T15:45:00'),
      date: "09/12/24",
      token: "SQUID2",
      amount: "47B SQUID2",
      pair: "SQUID2/USDC",
      operation: "VENTA",
      price: "1 SQUID2 = 0.0^(9)164 USDT",
      color: "c-normal c-green",
      details: "Se trata de recoger parte de la inversión inicial. Lleva un x4 casi y creo que podría llegar un x10 o más, por lo que dejo gran parte de la cantidad comprada."
    },
    {
      created_at: new Date('2024-12-09T15:30:00'),
      date: "09/12/24",
      token: "FET",
      amount: "5.6 FET",
      pair: "FET/USDC",
      operation: "COMPRA",
      price: "1 FET = 1.795 USDC",
      color: "c-normal c-green",
      details: "FET tiene potencial y no ha subido apenas dentro de su rango de competidores en Marketcap (1.92$ ACTUAL, NO ES MAL PRECIO)."
    },
    {
      created_at: new Date('2024-12-09T15:15:00'),
      date: "09/12/24",
      token: "JUP",
      amount: "8 JUP",
      pair: "JUP/USDC",
      operation: "COMPRA",
      price: "1 JUP = 1.25 USDC",
      color: "c-normal c-green",
      details: "JUP tiene potencial y no ha subido apenas dentro de su rango de competidores en Marketcap (1.35$ ACTUAL, NO ES MAL PRECIO)."
    },
    {
      created_at: new Date('2024-12-05T12:30:00'),
      date: "05/12/24",
      token: "Retardio",
      amount: "90 Retardio",
      pair: "Retardio/USD",
      operation: "COMPRA",
      price: "1 Retardio = 0.125 USD",
      color: "c-normal c-yellow",
      details: "En Raydium se puede comprar con SOL, contrato: 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx."
    },
    {
      created_at: new Date('2024-12-05T12:15:00'),
      date: "05/12/24",
      token: "ARKM",
      amount: "4.11 ARKM",
      pair: "ARKM/USDC",
      operation: "COMPRA",
      price: "1 ARKM = 2.43 USDC",
      color: "c-normal c-green",
      details: "ARKM tiene potencial y no ha subido apenas dentro de su rango de competidores en Marketcap (Precio actual 2.43 cerca de resistencia)."
    },
    {
      created_at: new Date('2024-12-04T16:45:00'),
      date: "04/12/24",
      token: "TRX",
      amount: "108 TRX",
      pair: "TRX/BTC",
      operation: "VENTA",
      price: "1 TRX = 0.00000317 BTC",
      color: "c-normal c-violet",
      details: "Operación realizada siguiendo la estrategia de ventas escalonadas VS BTC."
    },
    {
      created_at: new Date('2024-12-04T16:30:00'),
      date: "04/12/24",
      token: "SQUID2",
      amount: "311B SQUID2",
      pair: "SQUID2/USDT",
      operation: "COMPRA",
      price: "1 SQUID2 = 0.0^(10)48 USDT",
      color: "c-normal c-yellow",
      details: "Memecoin sobre la serie 'El juego del calamar'"
    },
    {
      created_at: new Date('2024-12-04T16:15:00'),
      date: "04/12/24",
      token: "XMR",
      amount: "0.05 XMR",
      pair: "XMR/USDT",
      operation: "COMPRA",
      price: "1 XMR = 200 USDT",
      color: "c-normal c-yellow"
    },
    {
      created_at: new Date('2024-12-04T16:00:00'),
      date: "04/12/24",
      token: "EWT",
      amount: "5.13 EWT",
      pair: "EWT/USDT",
      operation: "COMPRA",
      price: "1 EWT = 1.95 USDT",
      color: "c-normal c-yellow"
    },
    {
      created_at: new Date('2024-12-04T15:45:00'),
      date: "04/12/24",
      token: "KLV",
      amount: "1.755 KLV",
      pair: "KLV/USDT",
      operation: "COMPRA",
      price: "1 KLV = 0.0057 USDT",
      color: "c-normal c-yellow"
    },
    {
      created_at: new Date('2024-12-04T15:30:00'),
      date: "04/12/24",
      token: "VARA",
      amount: "645 VARA",
      pair: "VARA/USDT",
      operation: "COMPRA",
      price: "1 VARA = 0.031 USDT",
      color: "c-normal c-yellow"
    },
    {
      created_at: new Date('2024-12-04T15:15:00'),
      date: "04/12/24",
      token: "CGPT",
      amount: "90 CGPT",
      pair: "CGPT/USDT",
      operation: "COMPRA",
      price: "1 CGPT = 0.225 USDT",
      color: "c-normal c-yellow"
    },
    {
      created_at: new Date('2024-12-04T15:00:00'),
      date: "04/12/24",
      token: "API3",
      amount: "7.9 API3",
      pair: "API3/USDT",
      operation: "COMPRA",
      price: "1 API3 = 2.53 USDT",
      color: "c-normal c-yellow"
    },
    {
      created_at: new Date('2024-12-04T14:45:00'),
      date: "04/12/24",
      token: "LITH",
      amount: "47K LITH",
      pair: "LITH/USDT",
      operation: "COMPRA",
      price: "1 LITH = 0.00042 USDT",
      color: "c-normal c-yellow"
    },
    {
      created_at: new Date('2024-12-04T14:30:00'),
      date: "04/12/24",
      token: "VRA",
      amount: "2.590 VRA",
      pair: "VRA/USDC",
      operation: "COMPRA",
      price: "1 VRA = 0.00774 USDC",
      color: "c-normal c-yellow"
    },
    {
      created_at: new Date('2024-11-22T12:30:00'),
      date: "22/11/24",
      token: "ADA",
      amount: "25 ADA",
      pair: "ADA/BTC",
      operation: "VENTA",
      price: "1 ADA = 0.00000926 BTC",
      color: "c-normal c-blue"
    },
    {
      created_at: new Date('2024-11-16T14:15:00'),
      date: "16/11/24",
      token: "ADA",
      amount: "20 ADA",
      pair: "ADA/USDC",
      operation: "VENTA",
      price: "1 ADA = 0.776 USDC",
      color: "c-normal c-green"
    },
    {
      created_at: new Date('2024-11-16T14:00:00'),
      date: "16/11/24",
      token: "ROSS",
      amount: "10833 ROSS",
      pair: "ROSS/USD",
      operation: "COMPRA",
      price: "1 ROSS = 0.00934 USD",
      color: "c-normal c-orange"
    },
    {
      created_at: new Date('2024-11-15T13:30:00'),
      date: "15/11/24",
      token: "OP",
      amount: "10 OP",
      pair: "OP/USDC",
      operation: "COMPRA",
      price: "1 OP = 1.52 USDC",
      color: "c-normal c-green"
    },
    {
      created_at: new Date('2024-11-14T16:45:00'),
      date: "14/11/24",
      token: "XMR",
      amount: "0.07 XMR",
      pair: "XMR/BTC",
      operation: "COMPRA",
      price: "1 XMR = 0.001597 BTC",
      color: "c-normal c-green"
    },
    {
      created_at: new Date('2024-11-14T16:30:00'),
      date: "14/11/24",
      token: "ROSS",
      amount: "2000 ROSS",
      pair: "ROSS/USD",
      operation: "COMPRA",
      price: "1 ROSS = 0.000115 SOL",
      color: "c-normal c-green"
    }
  ]);

  console.log('✅ Base de datos poblada con éxito');
}