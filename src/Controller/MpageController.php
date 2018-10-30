<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
#use Symfony\Bundle\FrameworkBundle\Controller\Controller;
#use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


#class MpageController extends AbstractController
class MpageController
{
    /**
     * @Route("/", name="index")
     * @Method({"GET"})
     */
    public function index()
    {
        $number = random_int(0, 100);

        return new Response(
            '<html><body>Lucky number: '.$number.'</body></html>'
        );
    }
}