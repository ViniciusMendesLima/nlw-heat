import prismaClient  from "../prisma";


class GetLast3MessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3, //pegar as tres ultimas
      orderBy:{
        created_at:"desc",
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}

export { GetLast3MessagesService}