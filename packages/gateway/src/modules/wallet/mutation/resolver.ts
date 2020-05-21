import fetch from 'node-fetch'

export const createWalletResolver = async (args: any, ctx: any) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.WALLET_PORT}/api/wallet/create-wallet/${args.user_id}`,
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
