
// Parallel Routes
// slots help structure our content in a modular

// what is the benefit of building our user interface with parallel routes?
// single layout into various slots making the code more manageable
// independent route handling and subnavigation

// each route independently  => show an error message/loading in that specific section without affecting the other sections

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode,
  users: React.ReactNode,
  revenue: React.ReactNode,
  notifications: React.ReactNode,
  login: React.ReactNode
}) {

  const isLoggin = false

  return <>
    {!isLoggin ? <>
      <div>
        1111
        {login}
      </div>
    </> :
      <>
        <div>{children}</div>
        <div>
          <div>{users}</div>
          <div>{revenue}</div>
          <div>{notifications}</div>
        </div>
      </>
    }
  </>

}
