{data && data.map((item) => (
    <div key={item._id} className=''>
        <img width={300}
            src={item.image}
            alt={item.text}
        />                  <div>{item.text}</div>
        <div>{item.number}</div>
    </div>
))}