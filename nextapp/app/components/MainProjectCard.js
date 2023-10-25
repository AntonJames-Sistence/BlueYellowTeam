export default function MainProjectCard({ img, title, para }) {
  return (
    <div>
      <img src={img} alt="" />
      <div>Donate now</div>
      <div>{title}</div>
      <div>{para}</div>
    </div>
  );
}
