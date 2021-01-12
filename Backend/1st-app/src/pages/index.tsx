
export default function Home({org}) {
  return (
      <div>

        <h1>Hi</h1>
        <h3>{org.name}</h3>
        <img src={org.avatar_url} alt={org.name} width="80" style={{ borderRadius:40 }}/>
      </div>
    
    
  )
}

export const getStaticProps = async () => {
    
    const response = await fetch('https://api.github.com/users/MiranteDev');
    const data = await response.json();
    
    return {
        props: {
            org: data,
        },
        revalidate: 10
    }
};


