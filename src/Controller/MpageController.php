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
     * @Route("/", name="weclome")
     * @Method({"GET"})
     */
    public function welcome()
    {
        $number = random_int(0, 100);

        #return new Response('<html><body>Lucky number: '.$number.'</body></html>');
        return $this->render('content/welcome.html.twig');
    }
    
    /**
     * @Route("/vita", name="vita")
     * @Method({"GET"})
     */
    public function vita()
    {
        return $this->render('content/vita.html.twig');
    }

    /**
     * @Route("/gallery", name="gallery")
     * @Method({"GET"})
     */
    public function gallery()
    {
        return $this->render('content/gallery.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     * @Method({"GET"})
     */
    public function contact()
    {
        return $this->render('content/contact.html.twig');
    }
}