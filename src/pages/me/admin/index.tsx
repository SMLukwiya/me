import Layout from "@/project/Layout";
import Button from "@/components/ui/Button";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Root() {
    const {status} = useSession()

    return (
        <Layout>
            <div className="text-center">
                <Button 
                    onClick={
                        status === "authenticated" ? 
                            () => void signOut({callbackUrl: "/"}) :
                            () => void signIn()
                    }
                >
                    {status === "authenticated" ? 'Log out' : 'Log In'}
                </Button>
            </div>
        </Layout>
    )
}