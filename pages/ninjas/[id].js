export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { indNinjas: data }
    }
}

const IndexId = ({ indNinjas }) => {
    return (
        <div>
            <h1>Details Page</h1>
            <p>{indNinjas && indNinjas.name}</p>
        </div>
    );
}

export default IndexId;