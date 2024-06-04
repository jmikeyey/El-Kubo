/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YlARpBtkrW4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8 p-4 md:p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <img
            src="/placeholder.svg"
            alt="Margherita Pizza"
            width={400}
            height={300}
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
          />
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Margherita Pizza</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Classic Neapolitan-style pizza with tomato sauce, fresh
              mozzarella, and basil.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$12.99</span>
              <Button variant="outline" size="sm">
                Add to Order
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src="/placeholder.svg"
            alt="Chicken Teriyaki Bowl"
            width={400}
            height={300}
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
          />
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Chicken Teriyaki Bowl</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Grilled chicken, steamed rice, and teriyaki sauce.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$9.99</span>
              <Button variant="outline" size="sm">
                Add to Order
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src="/placeholder.svg"
            alt="Vegetable Stir Fry"
            width={400}
            height={300}
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
          />
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Vegetable Stir Fry</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Sautéed vegetables in a savory sauce, served over rice.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$8.99</span>
              <Button variant="outline" size="sm">
                Add to Order
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src="/placeholder.svg"
            alt="Beef Burrito"
            width={400}
            height={300}
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
          />
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Beef Burrito</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Seasoned ground beef, rice, beans, and salsa wrapped in a
              tortilla.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$7.99</span>
              <Button variant="outline" size="sm">
                Add to Order
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src="/placeholder.svg"
            alt="Salmon Avocado Salad"
            width={400}
            height={300}
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
          />
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Salmon Avocado Salad</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Fresh greens, grilled salmon, avocado, and a light vinaigrette.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$13.99</span>
              <Button variant="outline" size="sm">
                Add to Order
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src="/placeholder.svg"
            alt="Chicken Parmesan"
            width={400}
            height={300}
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
          />
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Chicken Parmesan</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Breaded and fried chicken breast topped with marinara and
              mozzarella.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">$14.99</span>
              <Button variant="outline" size="sm">
                Add to Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Review your order and place it when you're ready.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Margherita Pizza"
                width={64}
                height={48}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold">Margherita Pizza</h3>
                <p className="text-gray-500 dark:text-gray-400">$12.99</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Remove
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Chicken Teriyaki Bowl"
                width={64}
                height={48}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold">Chicken Teriyaki Bowl</h3>
                <p className="text-gray-500 dark:text-gray-400">$9.99</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Remove
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$22.98</span>
        </div>
        <Button size="lg" className="w-full">
          Place Order
        </Button>
      </div>
    </div>
  );
}
