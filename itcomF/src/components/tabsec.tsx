// import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function TabsSec() {
    return (
        <Tabs defaultValue="our-mission" className="w-[50%]:">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="our-mission">Our Mission</TabsTrigger>
                <TabsTrigger value="our-vision">Our Vision</TabsTrigger>
                <TabsTrigger value="our-value">Our Value</TabsTrigger>
            </TabsList>
            <TabsContent value="our-mission">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <p>Our mission is to empower businesses with innovative technology solutions, driving efficiency, growth, and success. We strive to deliver cutting-edge IT services and support, tailored to meet our clients' unique needs, ensuring seamless operations and future-ready digital transformation.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="our-vision">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <p>To be a leading IT firm that drives innovation, empowers businesses with cutting-edge technology, and delivers exceptional solutions that transform industries and enrich lives globally. We strive to be at the forefront of the digital revolution, fostering growth, creativity, and sustainability.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="our-value">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Value</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <p>Empowering businesses through innovative technology solutions. We deliver customized IT services that enhance efficiency, drive growth, and secure your digital future. Our commitment to excellence, client-focused approach, and cutting-edge expertise ensure that you stay ahead in a rapidly evolving tech landscape.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
