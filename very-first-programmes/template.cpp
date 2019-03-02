#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"
#include "opencv2/imgproc.hpp"
#include <iostream>

using namespace std;
using namespace cv;

//! [declare]
/// Global Variables
bool use_mask;
Mat img; Mat templ; Mat mask; Mat result;
//const char* "source Image" = "Source Image";
//const char* "Result Image" = "Result window";

int match_method;
int max_Trackbar = 5;
//! [declare]

/// Function Headers
void MatchingMethod( int, void* );

/**
 * @function main
 */
int main()
{
  /*if (argc < 3)
  {
    cout << "Not enough parameters" << endl;
    cout << "Usage:\n./MatchTemplate_Demo <image_name> <template_name> [<mask_name>]" << endl;
    return -1;
  }*/

  //! [load_image]
  /// Load image and template
  img = imread("coins.jpg", IMREAD_COLOR );
  templ = imread("coins(1).jpg", IMREAD_COLOR );

  /*if(argc > 3) {
    use_mask = true;*/
    mask = imread(templ.rows,templ.cols,CV_8UC1,Scalar(0,0,0));
  //}

  /*if(img.empty() || templ.empty() || (use_mask && mask.empty()))
  {
    cout << "Can't read one of the images" << endl;
    return -1;
  }*/
  //! [load_image]

  //! [create_windows]
  /// Create windows
  namedWindow( "source Image", WINDOW_AUTOSIZE );
  namedWindow( "Result Image", WINDOW_AUTOSIZE );
  //! [create_windows]

  //! [create_trackbar]
  /// Create Trackbar
  const char* trackbar_label = "Method: \n 0: SQDIFF \n 1: SQDIFF NORMED \n 2: TM CCORR \n 3: TM CCORR NORMED \n 4: TM COEFF \n 5: TM COEFF NORMED";
  createTrackbar( trackbar_label, "source Image", &match_method, max_Trackbar, MatchingMethod );
  //! [create_trackbar]

  MatchingMethod( 0, 0 );

  //! [wait_key]
  waitKey(0);
  return 0;
  //! [wait_key]
}

/**
 * @function MatchingMethod
 * @brief Trackbar callback
 */
void MatchingMethod( int, void* )
{
  //! [copy_source]
  /// Source image to display
  Mat img_display;
  img.copyTo( img_display );
  //! [copy_source]

  //! [create_result_matrix]
  /// Create the result matrix
  int result_cols =  img.cols - templ.cols + 1;
  int result_rows = img.rows - templ.rows + 1;

  result.create( result_rows, result_cols, CV_32FC1 );
  //! [create_result_matrix]

  //! [match_template]
  /// Do the Matching and Normalize
  bool method_accepts_mask = (CV_TM_SQDIFF == match_method || match_method == CV_TM_CCORR_NORMED);
  if (use_mask && method_accepts_mask)
    { matchTemplate( img, templ, result, match_method, mask); }
  else
    { matchTemplate( img, templ, result, match_method); }
  //! [match_template]

  //! [normalize]
  normalize( result, result, 0, 1, NORM_MINMAX, -1, Mat() );
  //! [normalize]

  //! [best_match]
  /// Localizing the best match with minMaxLoc
  double minVal; double maxVal; Point minLoc; Point maxLoc;
  Point matchLoc;

  minMaxLoc( result, &minVal, &maxVal, &minLoc, &maxLoc, Mat() );
  //! [best_match]

  //! [match_loc]
  /// For SQDIFF and SQDIFF_NORMED, the best matches are lower values. For all the other methods, the higher the better
  if( match_method  == TM_SQDIFF || match_method == TM_SQDIFF_NORMED )
    { matchLoc = minLoc; }
  else
    { matchLoc = maxLoc; }
  //! [match_loc]

  //! [imshow]
  /// Show me what you got
  rectangle( img_display, matchLoc, Point( matchLoc.x + templ.cols , matchLoc.y + templ.rows ), Scalar::all(0), 2, 8, 0 );
  rectangle( result, matchLoc, Point( matchLoc.x + templ.cols , matchLoc.y + templ.rows ), Scalar::all(0), 2, 8, 0 );

  imshow( "source Image", img_display );
  imshow( "Result Image", result );
  //! [imshow]

  return;
}
