"use server";


// next.js not support decimal and floadt points in number so we can serialize value then send to server and client 
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj) => {
    const serialized = { ...obj };
    if (obj.balance) {
        serialized.balance = obj.balance.toNumber();
    }

}

export async function CreateAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId) {
            throw new Error("Unauthorized")
        }

        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId
            },
        });

        if (!user) {
            throw new Error("user Not Found");
        }

        // convert all balance in float

        const balanceFloat = parseFloat(data.balance)

        if (isNaN(!balanceFloat)) {
            throw new Error("Invalid Balance amount");
        }

        // check if this  is  the user's first Account 

        const existingAccounts = await db.account.findMany({
            where: {
                userId: user.id
            }
        });

        const shouldBeDefault = existingAccounts.length === 0 ? true : data.isDefault;

        // set account default then make othet account unDefault
        if (shouldBeDefault) {
            await db.account.updateMany({
                where: {
                    userId: user.id, isDefault: true,
                },
                data: { isDefault: false },
            })
        }

        const account = await db.account.create({
            data: {
                ...data,
                balance: balanceFloat,
                userId: user.id,
                isDefault: shouldBeDefault,
            }
        })
        const serializeAccount = serializeTransaction(account);

        revalidatePath("/dashboard");
        return { success: true, data: serializeAccount }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getUserAccounts() {

}