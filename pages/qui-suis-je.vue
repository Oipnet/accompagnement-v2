<template>
  <h1 class="flex justify-end text-4xl text-primary font-dancing-script w-full mt-12 pr-24">Qui suis je</h1>
  <section class="flex sm:flex-row mt-[64px] flex-col-reverse">
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'sm:w-2/5 w-full m-auto',
      footer: {
        base: 'flex justify-center',
      }
    }">
      <p class="text-center text-secondary">
        Moi c'est Karen, 34 ans, je vis près de Bordeaux avec mon mari (mon pilier) et mes 3 enfants.<br><br>

        Depuis toujours, j’ai des perceptions extrasensorielles et j'ai appris à les utiliser pour accompagner
        les âmes qui en ont besoin, notamment lors de notre entrée ou sortie de ce monde.<br><br>

        Mon don accompagne également toutes les « petites morts », tous ces changements qui nous permettent
        de nous réaligner dans nos vies. Je me suis formée en Reiki, lithothérapie, radiesthésie, naturopathie,
        Doula holistique, hypnonatal, facilitatrice d’espaces sacrés, Moon Mother… ce qui est ma petite boite
        à outils cosmique.<br><br>

        Après un « arrêt naturel de grossesse », qui a donné naissance à une petite étoile, j’ai décidé d’accompagner
        mes sœurs dans les petits et grands passages de la vie des femmes, dont celui de l’enfantement mais aussi
        de la préconception et de la matrescence.<br><br>

        La spiritualité fait partie intégrante de mes accompagnements, pour être au plus juste des besoins
        des femmes, pour les aider à se reconnecter à leur puissance et empouvoirement pour être actrices et pas
        spectatrices de leur vie!
      </p>
    </UCard>
    <nuxt-img
        preload
        src="/images/karen.webp"
        alt="Karen"
        class="h-[300px] sm:rounded-full w-full sm:h-[400px] sm:w-[400px] object-cover shadow-lg m-auto hover:scale-105 transition ease-in-out"
    />
  </section>
  <section>
    <h1 class="flex justify-center text-4xl text-primary font-dancing-script w-full mt-12 mb-10">
      Découvrir les valeurs qui m'animent
    </h1>
    <div class="grid grid-cols-2 place-items-center">
      <div class="text-center align-middle">
        <h2 class="text-primary font-dancing-script text-2xl text-center mb-8">Amour</h2>
        <p>
          Pour faire un soin, l'énergie d’amour est importante.<br><br>
          Elle permet à la personne de se sentir protégée et de pouvoir établir un lien de confiance,
          ce qui sera plus facile par la suite pour se déposer.<br><br>
          Cette valeur me semble importante dans ma communication pour transmettre cette belle énergie, donner
          envie d’en savoir plus.<br><br>
          Comprendre que cette énergie peut tout transcender quand elle est pure et vraie.
        </p>
      </div>
      <div class="flex justify-center">
        <nuxt-img src="/images/amour.webp" alt="Coeur" class="h-[600px] w-[400px] rounded-xl" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>