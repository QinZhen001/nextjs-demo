const Card = ({children}: {children: React.ReactNode}) => {

  const style= {
    padding: '20px',
    margin: '20px',
    border: '1px solid #333'
  }

  return <div style={style}>{children}</div>
}

export default Card
