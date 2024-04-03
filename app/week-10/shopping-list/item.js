// function Item(props) {
//     return (
//         <div className="p-4 m-6 max-w-sm bg-slate-800">
//             <h1 className = "text-xl font-bold">{props.name}</h1>
//             <h1 className = "text-base font-normal">Buy {props.quantity} in {props.category}</h1>
//         </div>

//     )
// }

// Another way to write the function is to destructure the props in the function signature:
function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="p-4 m-6 max-w-sm bg-slate-800 hover:bg-orange-700"
      onClick={() => onSelect()}
    >
      <h1 className="text-lg font-bold">{name}</h1>
      <h1 className="text-base font-normal">
        Buy {quantity} in {category}
      </h1>
    </div>
  );
}
export default Item;
