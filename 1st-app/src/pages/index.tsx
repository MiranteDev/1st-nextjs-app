
export default function Home({org}) {
  return (
      <div>

        <h1>Hi</h1>
  <h3>{org}</h3>
      </div>
    
    
  )
}

export const getStaticProps = async () => {
    
    const response = await fetch('https://3000-e7c4d607-7e52-489f-8344-8bde59017c8c.ws-eu03.gitpod.io/api/hello');
    const data = await response.json();
    
    return {
        props: {
            org: data,
        }
    }
};


