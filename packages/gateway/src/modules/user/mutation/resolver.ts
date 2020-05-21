import fetch from 'node-fetch'

export const createUserResolver = async (args: any, ctx: any) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.USER_PORT}/api/user/create-user`,
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
