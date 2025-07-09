import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const seasons = [
    {
      title: "Сакура",
      period: "Март - Май",
      description: "Цветение вишни и весенние фестивали",
      color: "bg-gradient-to-r from-sakura to-coral",
      icon: "Cherry",
    },
    {
      title: "Лето",
      period: "Июнь - Август",
      description: "Летние фестивали и горные походы",
      color: "bg-gradient-to-r from-turquoise to-skyblue",
      icon: "Sun",
    },
    {
      title: "Осень",
      period: "Сентябрь - Ноябрь",
      description: "Золотые клёны и храмовые сады",
      color: "bg-gradient-to-r from-coral to-yellow-400",
      icon: "Leaf",
    },
    {
      title: "Зима",
      period: "Декабрь - Февраль",
      description: "Горячие источники и снежные пейзажи",
      color: "bg-gradient-to-r from-skyblue to-blue-500",
      icon: "Snowflake",
    },
  ];

  const routes = [
    {
      title: "Золотой маршрут",
      duration: "7-10 дней",
      cities: ["Токио", "Камакура", "Хаконе", "Киото", "Нара", "Осака"],
      price: "от ¥150,000",
    },
    {
      title: "Сакура тур",
      duration: "5-7 дней",
      cities: ["Токио", "Ёсино", "Киото", "Канадзава"],
      price: "от ¥120,000",
    },
    {
      title: "Альпийский маршрут",
      duration: "8-12 дней",
      cities: ["Такаяма", "Сиракава-го", "Мацумото", "Нагано"],
      price: "от ¥180,000",
    },
  ];

  const attractions = [
    {
      name: "Храм Фусими Инари",
      location: "Киото",
      type: "Храм",
      rating: 4.8,
    },
    {
      name: "Гора Фудзи",
      location: "Хонсю",
      type: "Природа",
      rating: 4.9,
    },
    {
      name: "Бамбуковая роща",
      location: "Арасияма, Киото",
      type: "Природа",
      rating: 4.7,
    },
    {
      name: "Замок Химедзи",
      location: "Химедзи",
      type: "Замок",
      rating: 4.6,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-turquoise/10 via-sakura/10 to-coral/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/img/1619275d-6baf-4a4d-b09f-4a30fbd27739.jpg')",
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-coral via-turquoise to-skyblue bg-clip-text text-transparent animate-fade-in">
            Путешествие по Японии
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-150">
            Откройте для себя Land of the Rising Sun через призму сезонов
          </p>
          <div className="flex gap-4 justify-center animate-scale-in delay-300">
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white px-8"
            >
              Планировать поездку
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-turquoise text-turquoise hover:bg-turquoise/10"
            >
              Смотреть маршруты
            </Button>
          </div>
        </div>
      </section>

      {/* Seasons Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-mountain">
            Путешествуйте по сезонам
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season, index) => (
              <Card
                key={season.title}
                className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-24 ${season.color} flex items-center justify-center`}
                >
                  <Icon
                    name={season.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-mountain">
                    {season.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {season.period}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{season.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-mountain">
            Популярные маршруты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card
                key={route.title}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-coral">{route.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{route.duration}</Badge>
                    <Badge className="bg-turquoise text-white">
                      {route.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-mountain">
                      Города маршрута:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {route.cities.map((city) => (
                        <Badge
                          key={city}
                          variant="secondary"
                          className="text-xs"
                        >
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-skyblue hover:bg-skyblue/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-mountain">
            Топ достопримечательности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card
                key={attraction.name}
                className="hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-mountain">
                    {attraction.name}
                  </CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{attraction.type}</Badge>
                    <div className="flex items-center gap-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                      <span className="text-sm font-medium">
                        {attraction.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm flex items-center gap-1">
                    <Icon name="MapPin" size={14} className="text-turquoise" />
                    {attraction.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-coral via-turquoise to-skyblue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Готовы отправиться в незабываемое путешествие?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Создайте персональный маршрут с учётом ваших интересов и времени
            года
          </p>
          <Button
            size="lg"
            className="bg-white text-coral hover:bg-gray-100 px-8"
          >
            Начать планирование
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
