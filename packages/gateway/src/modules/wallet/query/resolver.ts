import fetch from 'node-fetch'

export const getWalletsResolver = async (args: any, ctx: any) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.WALLET_PORT}/api/wallet/all-wallet/${args.user_id}`,
      ctx,
    )
    const json = await response.json()

    return json
  } catch (error) {
    throw new Error(error)
  }
}
