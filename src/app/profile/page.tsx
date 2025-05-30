"use client";

import Head from 'next/head';
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isChecking, setIsChecking] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (!firebaseUser) {
                router.push("/login");
            } else {
                setUser(firebaseUser);
            }
            setIsChecking(false);
        });

        return () => unsubscribe();
    }, [router]);

    if (isChecking) {
        return <p className="p-4">Loading profile...</p>;
    }

    if (!user) return null;

    return (
        <>
            <Head>
                <title>User Profile | MyApp</title>
                <meta name="description" content="View your profile information including name, email, and user ID." />
            </Head>
            <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-lg mt-10">
                <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>
                <p><strong>Display Name:</strong> {user.displayName || "N/A"}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>UID:</strong> {user.uid}</p>
            </div>
        </>
    );
};

export default ProfilePage;
