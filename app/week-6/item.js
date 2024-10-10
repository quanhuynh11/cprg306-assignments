export default function Item({key, name, quantity, category}) {
    return (
        <div className="text-center w-1/4 bg-cyan-800 p-5 m-5 font-mono">
            <ul>
                <li className="font-bold text-2xl">{name}</li>
                <li>Amount: <b>{quantity}</b></li>
                <li>Aisle: <b>{category}</b></li>
            </ul>
        </div>
    );
};