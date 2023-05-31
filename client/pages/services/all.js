async function getService(props){
    const res = await fetch(`http://localhost:5000/service/${props}`,
    {
        next: { revalidate: 10 }
    });
    const data = await res.json();
    return data;
}

async function ServicePage(params){
    const service = await getService(params);
    console.log(service);

    return (
        <>
            <div>
                <h1>{service.title}</h1>
            </div>
        </>
    )
}

export default ServicePage;
