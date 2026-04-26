function SocialComponent({ className, url, icon, label }) {
  const openLink = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button type="button" aria-label={label} className={className} onClick={openLink}>
      <i className={icon} />
    </button>
  );
}

export default SocialComponent;
