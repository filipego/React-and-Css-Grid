import FeaturesList from "./FeaturesList";

function Features() {
  return (
    <section className="features">
        
        <FeaturesList icon="#icon-global" title="World's best luxury homes" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus." />

        <FeaturesList icon="#icon-trophy" title="Only the best properties" text="Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia." />

        <FeaturesList icon="#icon-map-pin" title="All homes in in top locations" text="Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum." />

        <FeaturesList icon="#icon-key" title="New home in one week" text="ero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit." />

        <FeaturesList icon="#icon-presentation" title="Top 1% realtors" text="Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus." />

        <FeaturesList icon="#icon-lock" title="Secure payments on nexter" text="Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae." />

    </section>
  );
}

export default Features;
