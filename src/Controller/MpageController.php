<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
#use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MpageController extends Controller
{
    /**
     * @Route("/", name="welcome")
     * @Method({"GET"})
     */
    public function welcome()
    {
        #$number = random_int(0, 100);
        #return new Response('<html><body>Lucky number: '.$number.'</body></html>');
        return $this->render(
            'content/welcome.html.twig',
            array(
                'navLinkActive' => 'welcome',
                'pageTitle' => 'Welcome'
            )
        );
    }
    
    /**
     * @Route("/vita", name="vita")
     * @Method({"GET"})
     */
    public function vita()
    {
        return $this->render(
            'content/vita.html.twig',
            array(
                'navLinkActive' => 'vita',
                'pageTitle' => 'Vita'
            )
        );
    }

    /**
     * @Route("/gallery", name="gallery")
     * @Method({"GET"})
     */
    public function gallery()
    {
        return $this->render(
            'content/gallery.html.twig',
            array(
                'navLinkActive' => 'gallery',
                'pageTitle' => 'Gallery'
            )
        );
    }

    /**
     * @Route("/about", name="about")
     * @Method({"GET"})
     */
    public function about()
    {
        return $this->render(
            'content/about.html.twig',
            array(
                'navLinkActive' => 'about',
                'pageTitle' => 'About'
            )
        );
    }
    
}