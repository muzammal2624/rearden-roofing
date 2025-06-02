import img from "../assets/construction-hero@2x.webp"
import ServiceCard from "../components/ServiceCard"

const SERVICES = [
	{
		title: "First Play Roofing",
		description:
			"Your roof is your most important asset.Not only will it protect your family and possessions from the harsh Australian conditions, it will also add a touch of style and beauty to your home",
		image: img,
	},
	{
		title: "Second Play Roofing",
		description:
			"Your roof is your most important asset.Not only will it protect your family and possessions from the harsh Australian conditions, it will also add a touch of style and beauty to your home",
		image: img,
	},
	{
		title: "Third Play Roofing",
		description:
			"Your roof is your most important asset.Not only will it protect your family and possessions from the harsh Australian conditions, it will also add a touch of style and beauty to your home",
		image: img,
	},
]

const Service = () => {
	return (
		<>
			<section className="services">
				<div className="contain">
					<div className="service-content">
						<h6>Our Services</h6>
						<h1>
							We are providing quaity <br />
							roofing services
						</h1>
					</div>
					<div className="flex">
						{SERVICES.map((val, i) => {
							return (
								<div className="col" key={i}>
									<ServiceCard {...val} />
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Service
