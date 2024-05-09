export default function SocialMediaBtn({ href, Image }) {
  return (
    <div className="SocialMediaButton">
      <a href={href}>
        <img src={Image} alt="" width={"50px"} />
      </a>
    </div>
  );
}
