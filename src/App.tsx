import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";



export default function App() {

  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <div>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <button
          >Ver token
          </button>
        </SignedIn>
      </header>
      {!isLoaded && (
        <div>Loading...</div>
      )}
      {isSignedIn && (
        <div>
          <p>Hello {user.id}</p>
          <p>Name: {user.fullName}</p>
          <p>Email: {user.emailAddresses.toString()}</p>
          <p>
            External accounts:
            <ul>
              {user.externalAccounts.map((account, index) => (
                <li key={index}>
                  Provider: {account.provider}

                </li>
              ))}
            </ul>
          </p>
          <p>Password enabled? {user.passwordEnabled.toString()}</p>
        </div>
      )}
      {!isSignedIn && (
        <div>Faça seu login</div>
      )}

      
    </div>
    
  )
}