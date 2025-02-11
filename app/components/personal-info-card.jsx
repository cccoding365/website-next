import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Linkedin } from "lucide-react";

const PersonalInfoCard = () => {
	return (
		<Card className="w-full h-full">
			<CardContent className="flex flex-col justify-center items-center p-6">
				<Image
					src="/avatar.jpg"
					alt="Profile Picture"
					width={100}
					height={100}
					className="rounded-full mb-4"
				/>
				<div className="flex flex-wrap justify-center gap-2 mb-3">
					<Badge variant="secondary">开发者</Badge>
					<Badge variant="secondary">设计师</Badge>
					<Badge variant="secondary">博主</Badge>
				</div>
				<p className="text-center text-muted-foreground mb-5">
					这里是一段简短的自我介绍。你可以描述你的专业技能、兴趣爱好或者你的人生目标。
				</p>
				<div className="flex space-x-4">
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-primary"
					>
						<Github size={24} />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-primary"
					>
						<Twitter size={24} />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-primary"
					>
						<Linkedin size={24} />
					</a>
				</div>
			</CardContent>
		</Card>
	);
};

export default PersonalInfoCard;
