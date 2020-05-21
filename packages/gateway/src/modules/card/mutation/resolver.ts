import fetch from 'node-fetch'

export const createCardResolver = async (args: any, ctx: any) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.CARD_PORT}/api/card/create-card/${args.wallet_id}`,
      {
        method: 'POST',
        headers: {
          ...ctx.headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
      },
    )
    const json = await response.json()

    return json
  } catch (error) {
    throw new Error(error)
  }
}

export const blockCardResolver = async (args: any, ctx: any) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.CARD_PORT}/api/card/block-card/${args.card_id}`,
      {
        method: 'PUT',
        headers: {
          ...ctx.headers,
          'Content-Type': 'application/json',
        },
      },
    )
    const json = await response.json()
    console.log(json)
    return json
  } catch (error) {
    throw new Error(error)
  }
}
