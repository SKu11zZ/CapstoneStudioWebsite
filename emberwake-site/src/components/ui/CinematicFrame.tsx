type CinematicFrameProps = {
  variant?: "hero" | "video" | "image" | "poster";
  label: string;
  meta?: string;
  isVideo?: boolean;
};

export function CinematicFrame({ variant = "image", label, meta, isVideo = false }: CinematicFrameProps) {
  return (
    <div className={`cinematic-frame cinematic-frame--${variant}`}>
      <div className="cinematic-frame__light" />
      <div className="cinematic-frame__corners" />
      {isVideo ? <span className="cinematic-frame__play" aria-hidden="true" /> : null}
      <div className="cinematic-frame__text">
        <span>{label}</span>
        {meta ? <small>{meta}</small> : null}
      </div>
    </div>
  );
}
