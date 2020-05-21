import fetch from 'node-fetch'

export const getCardByIdResolver = async (card_id: string, ctx: any) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.CARD_PORT}/api/card/${card_id}`,
      ctx,
    )

    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}
