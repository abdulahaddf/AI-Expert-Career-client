import { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full border rounded-[20px] shadow-sm bg-[#E3E6EC]">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between  p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-bold">{title}</p>

        <svg
          viewBox="0 0 24 24"
          className={`w-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 bg-[#F2F4F7] rounded-b-[20px]">
          <p className="">{children}</p>
        </div>
      )}
    </div>
  );
};

const FaqCart = () => {
  return (
    <div className="mb-[100px]">
      <div className="">
        <div className="">
         
          <div className="">
            <div className="flex flex-col gap-6">
              <Item title="Brain Cells-">
                <div className="px-4 py-6 space-y-5">
                  <p>
                    Take charge of your Brain and mental health. Healthy brain
                    cells are a key to good quality life and any problem in
                    their functioning can be a root cause to all major health
                    issues.
                  </p>
                  <p className="">
                    Get to know your brain cells, cognitive potential, mental
                    health, neurotransmitter level in the brain (Brain chemical
                    profile) and much more. Understand Ways to Supercharge your
                    brain, enhance your mental health and boost memory,
                    motivation, creativity, alertness, general cognitive
                    function and reduce age-related decline in brain function.
                  </p>
                </div>
              </Item>
              <Item title="Immune Cells-">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Want to know how your immune cells will respond to
                    infections or damage. Understand your immune response,
                    immune cells and biomolecules related to it and get to know
                    ways to modulate the inflammatory response, which if not in
                    balance can stress out cells and trip up their healthy
                    function
                  </p>
                </div>
              </Item>
              <Item title="Thyroid cells-">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Do you know your Thyroid hormones impact every cell of your
                    body and are the main player behind metabolism, growth and
                    development of the human body and cells. Thereby any
                    disturbance on cellular level can be a root cause of a lot
                    of problems in your body.
                  </p>
                  <p className="">
                    Understand the cellular factors that can impact thyroid
                    health like Nutritional deficiency, Hormonal production and
                    Inflammation and get to know precise ways to optimise
                    thyroid health
                  </p>
                </div>
              </Item>
              <Item title="Cellular aging-">
                <div className="px-4 py-6 space-y-4">
                  <p>Want to remain young forever!</p>
                  <p className="">
                    Your actual Age is just a number, It’s the biological age
                    that decides your true age. Keep your cells healthy and
                    young by reducing the rate of cellular aging. Understand
                    factors that promote cellular stress, cell growth and repair
                    Get to know ways that can promote healthy cellular aging and
                    enhance cellular health
                  </p>
                </div>
              </Item>
              <Item title="Detox-">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Damage at cellular level due to accumulation of toxins and
                    oxidative stress is one of the leading causes of all the
                    health issues.
                  </p>
                  <p className="">
                    Understand if your cells and biomolecules are able to clear
                    toxins, chemicals and waste products efficiently- that can
                    damage the cells and the DNA and impair their healthy
                    functioning Get to know ways that can enhance cellular detox
                    function and protect the cells and body from toxins.
                  </p>
                </div>
              </Item>
              <Item title="Skin cells-">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Healthy skin protects our body from harmful effects of UV
                    rays, microbes, toxins and prevents loss of moisture.
                  </p>
                  <p className="">
                    Understand your skin cells and get to know the functioning
                    of biomolecules associated with skin aging, skin elasticity,
                    skin hydration, skin pigmentation, skin inflammation, skin
                    glycation, skin issues, acne and much more. Get healthy and
                    nourished skin with our precise and targeted skin
                    recommendations that are aimed towards the root cause.
                  </p>
                </div>
              </Item>
              <Item title="Hair follicle cells-">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Fight hair loss, improve hair quality, hair volume and hair
                    growth and enhance your hair health by targeting the root
                    cause of hair fall and hair issues on cellular level. Get to
                    know what works for your hair with our precise and targeted
                    recommendations.
                  </p>
                </div>
              </Item>
              <Item title="Muscle and fat cells- ">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Having trouble losing unwanted body fat and building
                    muscles? Want to reach your body transformation, muscle
                    building or fat loss goal quickly? Accumulation of excess
                    body fat especially visceral fat can be due to numerous
                    factors on cellular and molecular level.
                  </p>
                  <p className="">
                    Want to know what’s stopping your growth i.e. the root
                    cause. Understand your Fat and muscle cells and get to know
                    precise and targeted ways to reduce unwanted,harmful body
                    fat and activate and build muscles.
                  </p>
                </div>
              </Item>
            </div>
            <div className="flex flex-col gap-6">
              <Item title="Bones and Joint cells-">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Understand factors and biomolecules that can impact your
                    joint cells and health of your joints like inflammation
                    levels, bone density and many more.
                  </p>
                  <p className="">
                    Get to know precise ways for stronger bones and joints.
                    Prevent and manage joint issues by understanding and
                    targeting the root cause.
                  </p>
                </div>
              </Item>
              <Item title="Lung cells- ">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Each organ is related to an emotion, and the lungs are
                    related to grief. When you clear your lungs, you eliminate
                    grief and sadness - Mandy Ingber
                  </p>
                  <p className="">
                    Understand your lungs on a cellular and molecular level,
                    risk of catching viral infections, anti microbial response,
                    Inflammatory response and other factors. Get to know precise
                    and targeted ways to enhance your lung cells health and
                    prevent and manage lung issues.
                  </p>
                </div>
              </Item>
              <Item title="Gut cells- ">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    “If s one thing to know about the human body; it s
                    this: the human body has a ringmaster. This ringmaster
                    controls your digestion, your immunity, your brain, your
                    weight, your health and even your happiness. This ringmaster
                    is the gut” ― Nancy Mure
                  </p>
                  <p className="font-bold text-black">― Nancy Mure</p>
                  <p className="">
                    Get to know targeted and precise ways to balance Gut
                    Inflammation, enhance gut microbiome diversity, nutrient
                    absorption and Prevent and manage gut issues. Target the
                    root cause of all your gut issues and optimise your body,
                    mind and overall health
                  </p>
                </div>
              </Item>
              <Item title="Blood sugar">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    Trouble controlling your blood sugar? Do you have a family
                    history of diabetes? Looking for ways to avoid further
                    complications- Target the root cause
                  </p>
                  <p className="">
                    Beta cells are the producers of the only blood
                    glucose-lowering hormone in the body: insulin. Understand
                    factors and biomolecules controlling blood sugar and Get to
                    know targeted and precise ways to Prevent and manage
                    diabetes
                  </p>
                </div>
              </Item>
              <Item title="Cellular Nutrition- ">
                <div className="px-4 py-6 space-y-4">
                  <p>
                    “Medicines cannot drug away the cellular defects that
                    develop in response to improper nutrition throughout life” -
                    Joel Fuhrman
                  </p>
                  <p>We are not what we eat</p>
                  <p>We are what our cells eat</p>
                  <p className="">
                    The food we eat might starve our cells of the essential
                    nutrients if the nutrients are not absorbed, processed or
                    transported properly to the cells.
                  </p>
                  <p className="">
                    Don’t deprive your cells of essential nutrients. Nourish and
                    rejuvenate your cells by giving them the nutrition they
                    need, <br />
                    Our cells need the correct amount of nutrients to repair
                    damaged biomolecules, cleanse toxins and to ensure it’s
                    proper functioning.
                  </p>
                  <p>Deep nourishment on cellular level can help you-</p>
                  <ul className="list-disc list-outside ">
                    <li>Look and feel young</li>
                    <li>
                      Detox toxins and waste products and cleanse your body
                    </li>
                    <li>Get stronger and sharper mind</li>
                    <li>Lose unwanted body fat </li>
                    <li>Nourish your skin</li>
                    <li>Strong and healthy hair</li>
                    <li>Prevent and manage diseases and infections</li>
                  </ul>
                  <p>
                    Get to know how your Cell processes, absorbs, transports and
                    digests nutrients and understand your cellular nutritional
                    requirements. Food intolerances and allergies that is
                    disrupting your health What kind and source of food Food
                    psychology(psychological factors that governs your eating
                    behaviour) Feed your cells a precise amount of nutrients to
                    enhance your cellular health and reach closer to your goal
                    and your maximum potential.
                  </p>
                </div>
              </Item>
              <Item title="Sleep- ">
                <div className="px-4 py-6 space-y-4">
                  <p>A good sleep cures it ALL.</p>
                  <p className="">
                    Sleep is when our cells repair, replenish, recover and clear
                    toxins and waste. Get to know your sleep pattern,
                    chronotype, ideal sleep/wake cycle, wakefulness in morning,
                    tendencies and causal factors of sleep disorders and get an
                    in depth understanding about your body’s biological clock
                    (circadian rhythm). Also get recommendations to help with
                    sleep issues and sleep disorders that can impact overall
                    cellular health by promoting cellular stress and impaired
                    recovery of cells. <br /> And ways to get a good s
                    sleep.
                  </p>
                </div>
              </Item>
              <Item
                title="Heart
"
              >
                <div className="px-4 py-6 space-y-4">
                  <p>A healthy heart is what it takes!</p>
                  <p className="">
                    Understand factors and biomolecules that impact Heart health
                    Get to know targeted recommendations to mitigate risk of
                    heart disorders and keep your heart healthy and safe.
                  </p>
                </div>
              </Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqCart;